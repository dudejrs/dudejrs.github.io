
const {writeFileSync} = require('fs')

const {FileJob} = require("../../job")
const {QuarterActivitesScheme} = require("../../scheme/activities")

async function fetchActivitiesPerQuarter({path, client}){
	const d = await QuarterActivitesScheme.convert(undefined, {client})
	await writeFileSync(path, JSON.stringify(d), {encoding : 'utf-8', flag : 'w+'})
}

module.exports = new FileJob({
	name : `분기별 활동내역을 fetch`,
	path : `${process.env.project_path}/public/data/activities/quarter.json`,
	exec : fetchActivitiesPerQuarter,
	handleError : console.log
})