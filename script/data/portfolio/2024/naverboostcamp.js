const {writeFileSync} = require('fs');
const {DirectoryJob} = require('../../../job');
const {PlanTagsScheme} = require('../../../scheme/plan');
const {CheckBoxFilter} = require('../../../notion/filter');
const CertificateScheme = require('../../../scheme/certificate');

const tagsList = [['Node.js', 'Spring', 'React', 'Angular'], ['Basic']];

async function getInfra(client) {
    const response = await client.queryDatabase(
        process.env.notion_certificate_database_id,
        CheckBoxFilter.Equals('_hidden', false).build(),
    );
    const ret = [];
    for await (let {results} of response) {
        for (let page of results) {
            ret.push(await CertificateScheme.convert(page, {client}));
        }
    }

    const data = await PlanTagsScheme.convert([], {
        tags: ['DBMS', 'SQL', 'Linux', 'Docker', 'Kubernetices'],
        client,
    });

    return {Infra: {자격증: ret, ...data}};
}

async function getData({client, path}) {
    let ret = {};

    for (let tags of tagsList) {
        const data = await PlanTagsScheme.convert([], {tags, client});
        ret = {...ret, ...data};
    }

    let data = await getInfra(client);
    ret = {...ret, ...data};

    writeFileSync(`${path}/plan.json`, JSON.stringify(ret), {
        encoding: 'utf-8',
        flag: 'w+',
    });
}

module.exports = new DirectoryJob({
    name: '[portfolio] 2024 naver boost camp',
    path: `${process.env.PWD}/public/data/portfolio/2024/naverboostcamp`,
    exec: getData,
    handleError: console.log,
});
