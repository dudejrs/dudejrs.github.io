const {writeFileSync} = require('fs')

const {FileJob} = require('../../job')

async function fetchProjects({client, path}) {
	const d = await client.retrieveDatabase(process.env.notion_experience_project_database_id)
	await writeFileSync(`${process.env.project_path}/public/test/database/experienceProject.json`, JSON.stringify(d), {encoding: 'utf-8', flag : 'w+'})
}

module.exports = new FileJob({
	name : 'projects를 fetch',
	path : `${process.env.project_path}/public/test/experience/project.json`,
	exec : fetchProjects,
	handleError : console.log
})