const {readFileSync, writeFileSync} = require('fs')

const {FileJob} = require('../../job')
const {FormulaFilter} = require('../../notion/filter')

const {CodingPracticeScheme} = require('../../scheme/codingPractice')
const logTotalProblem = require('./logTotalProblem')

function Count(lang) {
	return `Count (${lang})`
}

function Repetiton(lang) {
	return `Repetition (${lang})`
}

async function getTotalProblem({path, client, languages}){

	const filter = FormulaFilter.Checkbox("_풀었는지_유무", "equals", true).build()

	const data = client.queryDatabase(process.env.notion_coding_practice_database_id, filter)

	let [count, repetiton] = [0, 0]
	let ret = {}

	for (let lang of languages) {
		ret[Count(lang)] = 0
		ret[Repetiton(lang)] = 0
	}

	for await (let {results} of data) {
		for (let page of results) {
			const d = await CodingPracticeScheme.convert(page, client)

			for (let lang of languages) {
				ret[Count(lang)] += d[lang] > 0 ? 1 : 0
				ret[Repetiton(lang)] += d[lang]
			}

			repetiton += d["Repetition"]
		}
		count += results.length
	}

	await writeFileSync(path, JSON.stringify({count, repetiton, ...ret}), {encoding: "utf-8"})

	return {count, repetiton, ...ret}
}

module.exports = new FileJob({
	name : 'total problem을 도출',
	path: `${process.env.project_path}/public/test/codingPractice/totalProblem.json`,
	exec: getTotalProblem,
	handleError : console.log,
}).setChild(logTotalProblem)