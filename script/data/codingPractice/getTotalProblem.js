const {readFileSync, writeFileSync} = require('fs')

const {FileJob} = require('../../job')
const {FormulaFilter} = require('../../notion/filter')

const CodingPracticeScheme = require('../../scheme/codingPractice')
const logTotalProblem = require('./logTotalProblem')

async function getTotalProblem({path, client, languages}){

	const count = 0
	const repetiton = 0
	
	// const filter = FormulaFilter.Checkbox("_풀었는지_유무", "equals", true).build()

	// const data = client.queryDatabase(process.env.notion_coding_practice_database_id, filter)

	// let [count, repetiton] = [0, 0]
	// for await (let {results} of data) {
	// 	for (let page of results) {
	// 		const d = await CodingPracticeScheme.convert(page, client)
	// 		repetiton += d["Repetition"]
			
	// 	}
	// 	count += results.length
	// }

	// await writeFileSync(path, JSON.stringify({count, repetiton}), {encoding: "utf-8"})

	return {count, repetiton }
}

module.exports = new FileJob({
	name : 'total problem을 도출',
	path: `${process.env.project_path}/public/test/codingPractice/totalProblem.json`,
	exec: getTotalProblem,
	handleError : console.log
}).setChild(logTotalProblem)