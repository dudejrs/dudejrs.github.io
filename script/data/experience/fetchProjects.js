const {writeFileSync} = require('fs');

const {FileJob} = require('../../job');
const {CheckBoxFilter} = require('../../notion/filter');
const {ExperienceProjectScheme} = require('../../scheme/experience');

async function fetchProjects({client, path}) {
    const d = await client.queryDatabase(
        process.env.NOTION_EXPERIENCE_PROJECT_DATABASE_ID,
        CheckBoxFilter.Equals('_hidden', false).build(),
    );
    const ret = [];
    for await (let {results} of d) {
        for (let page of results) {
            ret.push(await ExperienceProjectScheme.convert(page, {client}));
        }
    }
    await writeFileSync(path, JSON.stringify(ret), {
        encoding: 'utf-8',
        flag: 'w+',
    });
}

module.exports = new FileJob({
    name: 'projects를 fetch',
    path: `${process.env.PWD}/public/data/experience/project.json`,
    exec: fetchProjects,
    handleError: console.log,
});
