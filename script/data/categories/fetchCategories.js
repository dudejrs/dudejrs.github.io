const {writeFileSync} = require('fs')

const {DirectoryJob, DatabaseJob} = require('../../job')
const CategoriesScheme = require('../../scheme/categories')
const SkillScheme = require('../../scheme/skill')
const {MultiSelectFilter} = require('../../notion/filter')

const {fetchSkillMap} = require('../skills')
const {writeMetaData} = require('../../util')

async function fetchCategories({path, client, categories}) {
	
	async function fetchCategory({category, client, skillMap}) {

		const skillID = skillMap.has(category) ? skillMap.get(category) : null

		return await CategoriesScheme.convert(null, {category, client, skillID})
	}

	async function save({data, path}) {
		if (data) {
			writeFileSync(path, JSON.stringify(data), {encoding : 'utf-8'})
		}
	}

	const skillMap = await fetchSkillMap.exec({client})

	for (let category of categories) {
		const myJob = new DatabaseJob({
			name : `${category}에 관련된 계획 fetch`,
			path : `${path}/${category}.json`,
			exec : fetchCategory,
			finish : save,
		})
		await myJob.exec({category, client, skillMap})
	}

	writeMetaData(path)
}


module.exports = new DirectoryJob({
	name: `categories를 fetch`,
	path: `${process.env.project_path}/public/test/categories`,
	exec: fetchCategories,
	handleError: console.log
})
