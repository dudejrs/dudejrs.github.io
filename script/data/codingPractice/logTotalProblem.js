const {existsSync, readFileSync, writeFileSync} = require('fs')
const {DateFilter} = require('../../notion/filter')

const {DatabaseJob} = require('../../job')

async function findIDByDate(client, date) {
	const {value : data} = await client.queryDatabase(process.env.notion_coding_practice_log_database_id, DateFilter.Equals("Date", date).build()).next()

	return data["results"][0] ? data["results"][0]["id"] : null
}

async function logTotalProblem({client, count, repetiton, path}) {
	const date = new Date(Date.now()).toISOString().slice(0,10)

	const page_id = await findIDByDate(client, date)
	
	const properties = {
		"Date" : {
			"date" : {
				"start" : date
			}
		},
		"Count" : {
			number : count
		},
		"Repetition" : {
			number : repetiton
		},
	}

	if (page_id) {
		const response = await client.updatePage(page_id, properties)
	} else {
		const response = await client.createPage(process.env.notion_coding_practice_log_database_id, properties)
	}

	let data = {}
	
	if (existsSync(path)) {
	 	data = JSON.parse(readFileSync(path,{encoding : 'utf-8'}))
	}

	data[date] = {count, repetiton}

	await writeFileSync(path, JSON.stringify(data), {encoding : 'utf-8', flag : 'w+'})
}

module.exports = new DatabaseJob({
	name : 'total problem을 notion에 push',
	path : `${process.env.project_path}/public/test/codingPractice/log.json`,
	exec : logTotalProblem
})