const {PageScheme, NestedDatabaseScheme} = require('../notion/scheme')
const {NestedProperty, ComputedProperty} = require('../notion/property')
const {StringType, DateType} = require('../notion/property/type')

module.exports = new PageScheme("계획", {
	"title" :  NestedProperty.Title("Name","title"),
	"Status" : NestedProperty.Status("Status", "oz%3EA"),
	"분류" : NestedProperty.Select("분류","%5B%5Eh_"),
	"Tag" : NestedProperty.MultiSelect("Tag", "VPPQ"),
	"기간" : ComputedProperty.Formula("기간","YTb%3D", new DateType()),
	"완료율" : ComputedProperty.Formula("완료율", "kT%3D%7D", new StringType()),
	"세부계획" : new NestedDatabaseScheme("세부계획", {
		relation_property_name : "계획",
		database_id : "6a9277cc-fc4a-42de-bbf7-0b254e462070",
		scheme : new PageScheme("세부계획", {
			"세부계획" : NestedProperty.Title("세부계획", "title"),
			"Date" : NestedProperty.Date("Date", "d%5CTz"),
			"진행상태" : NestedProperty.Select("진행상태","%7Bh%7BP"),
			"Done" : NestedProperty.Checkbox("Done","iQZ~"),
		})
	})
})