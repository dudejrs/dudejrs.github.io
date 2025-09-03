const {writeFileSync} = require('fs');

const {FileJob} = require('../../job');
const {CheckBoxFilter} = require('../../notion/filter');

const {CareerScheme} = require('../../scheme/career');

async function fetchCareers({client, path}) {
    const d = await client.queryDatabase(
        process.env.notion_career_database_id,
        CheckBoxFilter.Equals('_hidden', false).build(),
    );

    const ret = [];
    for await (let {results} of d) {
        for (let page of results) {
            ret.push(await CareerScheme.convert(page, {client}));
        }
    }

    await writeFileSync(path, JSON.stringify(ret), {
        encoding: 'utf-8',
        flag: 'w+',
    });
}

module.exports = new FileJob({
    name: 'careers를 fetch',
    path: `${process.env.PWD}/public/test/career/career.json`,
    exec: fetchCareers,
    handleError: console.log,
});
