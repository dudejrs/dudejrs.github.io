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
const {PropertySort} = require('../../notion/sort');

function isFirstOfMonth(date) {
    return date.getDate() == 1;
}

function lastMonth(date) {
    if (!(date instanceof Date)) {
        throw new Error(`date must instance of Date`);
    }

    const ret = new Date(date);

    if (!isFirstOfMonth(date)) {
        ret.setDate(1);
        return ret;
    }

    const currentMonth = date.getMonth();

    if (currentMonth == 0) {
        ret.setYear(date.getFullYear() - 1);
        ret.setMonth(11);
    } else {
        ret.setMonth(currentMonth - 1);
    }

    return ret;
}

function lastMonthString(date) {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    if (!isFirstOfMonth(date)) {
        return `${currentYear}년 ${currentMonth + 1}월`;
    }

    if (currentMonth == 0) {
        return `${currentYear - 1}년 ${12}월`;
    }

    return `${currentYear}년 ${currentMonth}월`;
}

function toString(date) {
    return date.toISOString().slice(0, 10);
}

async function hasNext(date) {
    return date.getTime() >= new Date('2022-01-01');
}

function getScheme(cur) {
    const ret = new Scheme(`${lastMonthString(cur)}`, {});

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
                    toString(lastMonth(cur)),
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
                    toString(lastMonth(cur)),
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
                    toString(lastMonth(cur)),
                ),
                FormulaFilter.Date('_EndDate', 'before', toString(cur)),
            ),
        }),
    );

    return ret;
}

async function generateScheme({client}) {
    const ret = [];

    let cur = new Date(Date.now());

    while (true) {
        console.log(cur);
        ret.push(getScheme(cur));

        cur = lastMonth(cur);

        if (!(await hasNext(cur))) {
            break;
        }
    }

    return ret;
}

module.exports = new GeneratorScheme('월별 활동 타임라인', generateScheme);
