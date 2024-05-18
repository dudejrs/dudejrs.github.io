const {DatbaseScheme, PageScheme} = require('../notion/scheme')
const {NestedProperty, ComputedProperty} = require('../notion/property')
const {DateType, StringType} = require('../notion/property/type')

module.exports = new DatbaseScheme("카테고리", {
	scheme : new PageScheme("계획", {
		"title" :  NestedProperty.Title("Name","title"),
		"Status" : NestedProperty.Status("Status", "oz%3EA"),
		"기간" : ComputedProperty.Formula("기간","YTb%3D", new DateType()),
		"완료율" : ComputedProperty.Formula("완료율", "kT%3D%7D", new StringType()),
	})
});