const {GeneratorScheme, ContainerScheme, DatabaseScheme, PageScheme} = require('../../notion/scheme')
const {NestedProperty, ComputedProperty} = require('../../notion/property')
const {DateType} = require('../../notion/property/type')
const {ANDFilter, ORFilter, CheckBoxFilter, MultiSelectFilter} = require('../../notion/filter')
const {PropertySort} = require('../../notion/sort')

function generateScheme({tags}) {
	
	const orfilter = ORFilter.of(...tags.map(tag => MultiSelectFilter.Contains("Tag", tag)))

	return [new ContainerScheme(tags.join(","), {
			database_id : process.env.notion_plan_database_id,
			scheme : new DatabaseScheme("계획", {
				scheme : new PageScheme("", {
					"title" :  NestedProperty.Title("Name","title"),
					"Status" : NestedProperty.Status("Status", "oz%3EA"),
					"기간" : ComputedProperty.Formula("기간","YTb%3D", new DateType()),
				})
			}),
			filter : ANDFilter.of(CheckBoxFilter.Equals("완료",true),  orfilter),
			sorts : PropertySort.Descending("EndDate")
		})]
}


module.exports = new GeneratorScheme("Tag contains", generateScheme)