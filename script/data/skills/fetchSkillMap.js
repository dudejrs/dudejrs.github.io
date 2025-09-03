const {SkillShort} = require('../../scheme/skill');
const {DatabaseJob} = require('../../job');

async function fetchSkillMap({client}) {
    const response = await client.queryDatabase(
        process.env.NOTION_SKILLS_DATABASE_ID,
    );

    const ret = new Map();
    for await (let {results} of response) {
        for (let page of results) {
            let d = await SkillShort.convert(page, {client});
            ret.set(d['Name'], d['id']);
        }
    }

    return ret;
}

module.exports = new DatabaseJob({
    name: 'skill Id를 fetch',
    exec: fetchSkillMap,
});
