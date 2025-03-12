const {writeFileSync} = require('fs')

const {FileJob} = require('../../job')
const {FormulaFilter} = require('../../notion/filter')
const {CodingPracticeScheme} = require('../../scheme/codingPractice')

async function getProblemType(client) {
	const {properties} = await client.retrieveDatabase(process.env.NOTION_CODING_PRACTICE_DATABASE_ID)

	return properties["문제유형"]["multi_select"]["options"].map(option => option["name"])
}

async function getAggregationByProblemType({path, client, languages}){
	const filter = FormulaFilter.Checkbox("_풀었는지_유무", "equals", true).build()
	const problemTypes = await getProblemType(client)

	const data = client.queryDatabase(process.env.NOTION_CODING_PRACTICE_DATABASE_ID, filter)

	const ret = {}
	
	for (let problemType of problemTypes) {
		ret[problemType] = {
			count : 0,
			repetition: 0
		}

		for (let lang of languages) {
			ret[problemType][lang] = 0
		}
	}

	for await (let {results} of data) {
		for (let page of results) {
			const d = await CodingPracticeScheme.convert(page, {client})
			for (let problemType of d["문제유형"]) {
				ret[problemType]["count"] += 1
				ret[problemType]["repetition"] += d["Repetition"]
				for (let lang of languages) {
					ret[problemType][lang] += d[lang]
				}
			}
		}
	}

	await writeFileSync(path, JSON.stringify(ret), {encoding : 'utf-8', flag: 'w+'})

	return
}

module.exports = new FileJob({
	name : 'aggregation by problem type을 도출',
	path : `${process.env.PWD}/public/data/codingPractice/aggregationByProblemType.json`,
	exec : getAggregationByProblemType,
	handleError: console.log
})