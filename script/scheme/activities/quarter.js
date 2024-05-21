const {GeneratorScheme, ContainerScheme, DatabaseScheme, PageScheme} = require('../../notion/scheme')
const {NestedProperty, ComputedProperty} = require('../../notion/property')
const {DateType} = require('../../notion/property/type')
const {ANDFilter, RollupFilter} = require('../../notion/filter')
const {PropertySort} = require('../../notion/sort')

const Quarters = Object.freeze([
		Object.freeze([-1, 9, 1]), 
		Object.freeze([0, 0, 1]), 
		Object.freeze([0, 3, 1]), 
		Object.freeze([0, 6, 1]), 
		Object.freeze([0, 9, 1])

	])

function isFirstOfQuarter(date) {
	return (date.getMonth()) % 3 == 0 && date.getDate() == 1
}

function lastQuarter(date) {
	if (!(date instanceof Date)) {
		throw new Error(`date must instance of Date`)
	}

	const currentMonth = date.getMonth()
	const index = Math.floor(currentMonth / 3) + !(isFirstOfQuarter(date))

	const ret = new Date(date)

	ret.setYear(date.getFullYear() + Quarters[index][0])
	ret.setMonth(Quarters[index][1])
	ret.setDate(Quarters[index][2])

	return ret
}

function currentQuarterString(date) {
	const index = Math.floor(date.getMonth() / 3) + !(isFirstOfQuarter(date))

	if (index == 0) {
		return `${date.getFullYear() - 1}년 ${4}Q`
	}

	return `${date.getFullYear()}년 ${index}Q`
}

function toString(date) {
	return date.toISOString().slice(0,10)
}

async function hasNext(date, client) {
	const {value} = await client.queryDatabase(process.env.notion_plan_database_id, RollupFilter.Date("EndDate", "before", date).build(), undefined, undefined, undefined, 1).next();
	return value.results.length != 0
}

async function generateScheme({client}) {
	const ret = []

	let cur = new Date(Date.now())

	while (true) {
		console.log(cur)
		 ret.push(new ContainerScheme(`${currentQuarterString(cur)}`, {
				database_id : process.env.notion_plan_database_id,
				scheme : new DatabaseScheme("", {
					scheme : new PageScheme("",{
							"title" :  NestedProperty.Title("Name","title"),
							"Status" : NestedProperty.Status("Status", "oz%3EA"),
							"Tag" : NestedProperty.MultiSelect("Tag", "VPPQ"),
							"기간" : ComputedProperty.Formula("기간","YTb%3D", new DateType()),
					})
				}),
				filter : ANDFilter.of(RollupFilter.Date("EndDate","on_or_after", toString(lastQuarter(cur))), RollupFilter.Date("EndDate", "before", toString(cur)))
			}))

		cur = lastQuarter(cur)

		if (!await hasNext(cur, client)) {
			break;
		}
	}

	return ret
}

module.exports = new GeneratorScheme ("분기별 활동 타임라인", generateScheme)