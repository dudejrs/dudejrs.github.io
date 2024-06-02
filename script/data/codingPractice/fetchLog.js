const {writeFileSync} = require("fs")
const {ANDFilter, DateFilter} = require('../../notion/filter')
const {CodingPracticeLog} = require('../../scheme/codingPractice')

const {FileJob} = require('../../job')

async function fetchLog({client, path}){

	const end = (new Date(Date.now() + 24 * 60 * 60 * 1000)).toISOString().slice(0, 10)
	const begin = (new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10)
	
	let response = await client.queryDatabase(process.env.notion_coding_practice_log_database_id, ANDFilter.of(DateFilter.Before("Date", end), DateFilter.After("Date", begin)).build())

	let ret = {}
	for await (let {results} of response) {
		for (let page of results) {
			const {date, ...d}= await CodingPracticeLog.convert(page, {client})
			ret[date.start] = d
		}
	}

	await writeFileSync(path, JSON.stringify(ret), {encoding : 'utf-8'})
}

module.exports = new FileJob({
	name : 'total problem log를 fetch',
	path : `${process.env.project_path}/public/data/codingPractice/log.json`,
	exec : fetchLog,
	handleError : console.log
})