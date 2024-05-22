const {GeneratorScheme, ContainerScheme, DatabaseScheme, PageScheme} = require('../../notion/scheme')
const {NestedProperty, ComputedProperty} = require('../../notion/property')
const {DateType} = require('../../notion/property/type')
const {ANDFilter, RollupFilter} = require('../../notion/filter')
const {PropertySort} = require('../../notion/sort')


function isFirstOfMonth(date) {
	return date.getDate() == 1
}

function lastMonth(date) {
	if (!(date instanceof Date)) {
		throw new Error(`date must instance of Date`)
	}

	const ret = new Date(date)

	if (!(isFirstOfMonth(date))) {
		ret.setDate(1)
		return ret
	}

	const currentMonth = date.getMonth()

	if (currentMonth == 0) {
		ret.setYear(date.getFullYear() - 1)
		ret.setMonth(11)
	} else {
		ret.setMonth(currentMonth - 1)
	}

	return ret
}

function lastMonthString(date) {
	const currentYear = date.getFullYear()
	const currentMonth = date.getMonth()

	if (!(isFirstOfMonth(date))) {
		return `${currentYear}년 ${currentMonth + 1}월`
	}

	if ( currentMonth == 0) {
		return `${currentYear - 1}년 ${12}월`
	}

	return `${currentYear}년 ${currentMonth}월`
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
		 ret.push(new ContainerScheme(`${lastMonthString(cur)}`, {
				database_id : process.env.notion_plan_database_id,
				scheme : new DatabaseScheme("", {
					scheme : new PageScheme("",{
							"title" :  NestedProperty.Title("Name","title"),
							"Status" : NestedProperty.Status("Status", "oz%3EA"),
							"Tag" : NestedProperty.MultiSelect("Tag", "VPPQ"),
							"기간" : ComputedProperty.Formula("기간","YTb%3D", new DateType()),
					})
				}),
				filter : ANDFilter.of(RollupFilter.Date("EndDate","on_or_after", toString(lastMonth(cur))), RollupFilter.Date("EndDate", "before", toString(cur)))
			}))

		cur = lastMonth(cur)

		if (!await hasNext(cur, client)) {
			break;
		}
	}

	return ret
}

module.exports = new GeneratorScheme ("월별 활동 타임라인", generateScheme)