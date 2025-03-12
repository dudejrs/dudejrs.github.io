const {writeFileSync} = require('fs')
const {FileJob} = require('../../job')
const {CodingPracticeCategoriesScheme} = require('../../scheme/codingPractice')

async function getAggregationByCategories({path, client}){
	const data = await client.queryDatabase(process.env.NOTION_CODING_PRACITCE_CATEGORIES_DATABASE_ID)

	const ret = []

	for await (let {results} of data) {
		for (let page of results) {
			const d = await CodingPracticeCategoriesScheme.convert(page, {client})
			ret.push(d)
		}
	}
	
	await writeFileSync(path, JSON.stringify(ret), {encoding : 'utf-8', flat : 'w+'})
}

module.exports = new FileJob({
	name : '',
	path : `${process.env.PWD}/public/data/codingPractice/aggregationByCategories.json`,
	exec : getAggregationByCategories,
	handleError : console.log
})