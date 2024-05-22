const {readFileSync, writeFileSync} = require('fs')

const {DirectoryJob, DatabaseJob} = require('../../job')
const PlanScheme = require('../../scheme/plan')
const {TimestampFilter} = require('../../notion/filter')
const {TimestampSort} = require('../../notion/sort')

const {writeMetaData} = require('../../util')


async function fetchPlans({path, client}){

	const {updated} = JSON.parse(await readFileSync(`${path}/meta.json`, {encoding : 'utf-8'}))

	async function fetch() {
		let ret  = []
		const data = client.queryDatabase(process.env.notion_plan_database_id, TimestampFilter.LastEditedTime("after", updated).build(), TimestampSort.LastEditedTimeDescending().build())

		for await (let {results} of data) {
			if (results && Array.isArray(results)) {
				for (page of results) {
					let p = await PlanScheme.convert(page, {client})
					await save(p)
				}
			}
		}
	}

	async function save(page) {
		if (!page || !page.id){
			throw new Error("Invalid page")
		}

		writeFileSync(`${path}/${page.id}.json`, JSON.stringify(page), {encoding : 'utf-8'})
	}

	const myJob	= new DatabaseJob({
		name : 'plans를 fetch',
		path : path,
		exec : fetch
	})

	await myJob.exec()

	writeMetaData(path)
}

module.exports = new DirectoryJob({
		name: 'plans를 fetch',
		path: `${process.env.project_path}/public/test/plans`,
		exec: fetchPlans,
		handleError: console.log

})