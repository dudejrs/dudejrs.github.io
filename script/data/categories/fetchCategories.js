const {writeFileSync} = require('fs')

const {DirectoryJob, DatabaseJob} = require('../../job')
const CategoriesScheme = require('../../scheme/categories')
const {MultiSelectFilter} = require('../../notion/filter')

const {writeMetaData} = require('../../util')

async function fetchCategories({path, client, categories}) {
	async function fetchCategory(category) {
		const ret = []
		const data = client.queryDatabase(process.env.notion_plan_database_id, MultiSelectFilter.Contains("Tag", category).build(), undefined, undefined, undefined)
		
		for await (let {results} of data) {
			if (results && Array.isArray(results)) {
				let d = await CategoriesScheme.convert(results, {client})
				ret.push(...d)
			}
		}

		return ret 
	}

	async function save({data, path}) {
		if (data) {
			writeFileSync(path, JSON.stringify(data), {encoding : 'utf-8'})
		}
	}

	for (let category of categories) {
		const myJob = new DatabaseJob({
			name : `${category}에 관련된 계획 fetch`,
			path : `${path}/${category}.json`,
			exec : fetchCategory,
			finish : save,
		})
		await myJob.exec(category)
	}

	writeMetaData(path)
}


module.exports = new DirectoryJob({
	name: `categories를 fetch`,
	path: `${process.env.project_path}/public/test/categories`,
	exec: fetchCategories,
	handleError: console.log
})
