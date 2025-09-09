const {
    Scheme,
    GeneratorScheme,
    ContainerScheme,
    DatabaseScheme,
    PageScheme,
} = require('../../notion/scheme');
const {
    NestedProperty,
    ComputedProperty,
    RelationProperty,
} = require('../../notion/property');
const {DateType} = require('../../notion/property/type');
const {
    ANDFilter,
    RollupFilter,
    CheckBoxFilter,
    FormulaFilter,
} = require('../../notion/filter');

const Quarters = Object.freeze([
    Object.freeze([-1, 9, 1]),
    Object.freeze([0, 0, 1]),
    Object.freeze([0, 3, 1]),
    Object.freeze([0, 6, 1]),
    Object.freeze([0, 9, 1]),
]);

function isFirstOfQuarter(date) {
    return date.getMonth() % 3 == 0 && date.getDate() == 1;
}

function lastQuarter(date) {
    if (!(date instanceof Date)) {
        throw new Error(`date must instance of Date`);
    }

    const currentMonth = date.getMonth();
    const index = Math.floor(currentMonth / 3) + !isFirstOfQuarter(date);

    const ret = new Date(date);

    ret.setYear(date.getFullYear() + Quarters[index][0]);
    ret.setMonth(Quarters[index][1]);
    ret.setDate(Quarters[index][2]);

    return ret;
}

function currentQuarterString(date) {
    const index = Math.floor(date.getMonth() / 3) + !isFirstOfQuarter(date);

    if (index === 0) {
        return `${date.getFullYear() - 1}년 ${4}Q`;
    }

    return `${date.getFullYear()}년 ${index}Q`;
}

function toString(date) {
    return date.toISOString().slice(0, 10);
}

function getScheme(cur) {
    const ret = new Scheme(`${currentQuarterString(cur)}`, {});

    ret.addChild(
        new ContainerScheme('계획', {
            database_id: process.env.NOTION_PLAN_DATABASE_ID,
            scheme: new DatabaseScheme('계획', {
                scheme: new PageScheme('', {
                    title: NestedProperty.Title('Name', 'title'),
                    Status: NestedProperty.Status('Status', 'oz%3EA'),
                    Tag: NestedProperty.MultiSelect('Tag', 'VPPQ'),
                    기간: ComputedProperty.Formula(
                        '기간',
                        'YTb%3D',
                        new DateType(),
                    ),
                }),
            }),
            filter: ANDFilter.of(
                CheckBoxFilter.Equals('완료', true),
                RollupFilter.Date(
                    'EndDate',
                    'on_or_after',
                    toString(lastQuarter(cur)),
                ),
                RollupFilter.Date('EndDate', 'before', toString(cur)),
            ),
        }),
    );

    ret.addChild(
        new ContainerScheme('프로젝트', {
            database_id: process.env.NOTION_EXPERIENCE_PROJECT_DATABASE_ID,
            scheme: new DatabaseScheme('프로젝트', {
                scheme: new PageScheme('', {
                    이름: NestedProperty.Title('이름', 'title'),
                    기간: NestedProperty.Date('기간', 'UocS'),
                    태그: NestedProperty.MultiSelect('태그', 'yJPS'),
                    기술: new RelationProperty(
                        '기술',
                        'YmTS',
                        NestedProperty.Title('Name', 'title'),
                    ),
                }),
            }),
            filter: ANDFilter.of(
                CheckBoxFilter.Equals('_hidden', false),
                FormulaFilter.Date(
                    '_EndDate',
                    'on_or_after',
                    toString(lastQuarter(cur)),
                ),
                FormulaFilter.Date('_EndDate', 'before', toString(cur)),
            ),
        }),
    );

    ret.addChild(
        new ContainerScheme('실습', {
            database_id: process.env.NOTION_EXPERIENCE_PRACTICE_DATABASE_ID,
            scheme: new DatabaseScheme('실습', {
                scheme: new PageScheme('', {
                    이름: NestedProperty.Title('이름', 'title'),
                    기간: NestedProperty.Date('기간', 'km%60%7C'),
                    태그: NestedProperty.MultiSelect('태그', 'XAM%3F'),
                    기술: new RelationProperty(
                        '기술',
                        'FsGX',
                        NestedProperty.Title('Name', 'title'),
                    ),
                }),
            }),
            filter: ANDFilter.of(
                CheckBoxFilter.Equals('_hidden', false),
                FormulaFilter.Date(
                    '_EndDate',
                    'on_or_after',
                    toString(lastQuarter(cur)),
                ),
                FormulaFilter.Date('_EndDate', 'before', toString(cur)),
            ),
        }),
    );

    return ret;
}

async function hasNext(date) {
    return date.getTime() >= new Date('2022-01-01');
}

async function generateScheme() {
    const ret = [];

    let cur = new Date(Date.now());

    // eslint-disable-next-line no-constant-condition
    while (true) {
        console.log(cur);
        ret.push(getScheme(cur));

        cur = lastQuarter(cur);

        if (!(await hasNext(cur))) {
            break;
        }
    }

    return ret;
}

module.exports = new GeneratorScheme('분기별 활동 타임라인', generateScheme);
