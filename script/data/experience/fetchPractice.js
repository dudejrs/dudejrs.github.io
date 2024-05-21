const {writeFileSync} = require('fs')

const {FileJob} = require('../../job')

async function fetchPractice({client, path}) {
	const d = await client.retrieveDatabase(process.env.notion_experience_practice_database_id)
	await writeFileSync(`${process.env.project_path}/public/test/database/experiencePractice.json`, JSON.stringify(d), {encoding: 'utf-8', flag : 'w+'})
}

module.exports = new FileJob({
	name : 'projects를 fetch',
	path : `${process.env.project_path}/public/test/experience/practice.json`,
	exec : fetchPractice,
	handleError : console.log
})