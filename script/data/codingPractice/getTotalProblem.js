const {writeFileSync} = require('fs')

const {FileJob} = require('../../job')
const {FormulaFilter} = require('../../notion/filter')
const CodingPracticeScheme = require('../../scheme/codingPractice')

async function getTotalProblem(path, client, languages){

	const filter = FormulaFilter.Checkbox("_풀었는지_유무", "equals", true).build()

	const data = client.queryDatabase(process.env.notion_coding_practice_database_id, filter)

	let [count, repititon] = [0, 0]
	for await (let {results} of data) {
		for (let page of results) {
			const d = await CodingPracticeScheme.convert(page, client)
			repititon += d["Repetition"]
			
		}
		count += results.length
	}

	await writeFileSync(path, JSON.stringify({count, repititon}), {encoding: "utf-8"})

}

module.exports = new FileJob({
	path: `${process.env.project_path}/public/test/codingPractice/totalProblem.json`,
	exec: getTotalProblem
})