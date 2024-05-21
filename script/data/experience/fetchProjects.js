const {writeFileSync} = require('fs')

const {FileJob} = require('../../job')

const {CheckBoxFilter} = require('../../notion/filter')

const {ExperienceProjectScheme} = require('../../scheme/experience')

async function fetchProjects({client, path}) {
	console.log(CheckBoxFilter)
	const d = await client.queryDatabase(process.env.notion_experience_project_database_id, CheckBoxFilter.Equals("_hidden", false).build())
	const ret = []
	for await (let {results} of d) {
		for (let page of results) {
			ret.push(await ExperienceProjectScheme.convert(page, {client}))
		}
	}
	await writeFileSync(path, JSON.stringify(ret), {encoding: 'utf-8', flag : 'w+'})

}

module.exports = new FileJob({
	name : 'projects를 fetch',
	path : `${process.env.project_path}/public/test/experience/project.json`,
	exec : fetchProjects,
	handleError : console.log
})