const {writeFileSync} = require('fs')

const {FileJob} = require('../../job')

const {CheckBoxFilter} = require('../../notion/filter')
const {ExperiencePracticeScheme} = require('../../scheme/experience')

async function fetchPractices({client, path}) {
	const d = await client.queryDatabase(process.env.notion_experience_practice_database_id, CheckBoxFilter.Equals("_hidden", false).build())

	const ret = []
	for await (let {results} of d) {
		for (let page of results) {
			ret.push(await ExperiencePracticeScheme.convert(page, {client}))
		}
	}

	await writeFileSync(path, JSON.stringify(ret), {encoding: 'utf-8', flag : 'w+'})
}

module.exports = new FileJob({
	name : 'projects를 fetch',
	path : `${process.env.project_path}/public/data/experience/practice.json`,
	exec : fetchPractices,
	handleError : console.log
})