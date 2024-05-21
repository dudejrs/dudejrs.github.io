const {PageScheme, NestedDatabaseScheme} = require("../../notion/scheme")
const {NestedProperty, ComputedProperty, RelationProperty} = require('../../notion/property')

module.exports = new PageScheme("실습", {
	"이름" : NestedProperty.Title("이름", "title"),
	"기간" : NestedProperty.Date("기간", "km%60%7C"),
	"태그" : NestedProperty.MultiSelect("태그", "XAM%3F"),
	"기술" : new RelationProperty("기술", "FsGX", NestedProperty.Title("Name", "title")),
	"요약(50자)" : NestedProperty.RichText("요약(50자)", "lHUm"),
	"요약(200자)" : NestedProperty.RichText("요약(200자)", "3CjHk"),
	"실습URL" : NestedProperty.URL("실습URL", "t%3ACR"),
	"세부 경험" : new NestedDatabaseScheme("세부 경험", {
		relation_property_name : "🪴 실습",
		database_id : "c9cde8f2-c9d4-49d4-8c61-217f46f70024",
		scheme : new PageScheme("세부사항", {
			"이름" : NestedProperty.Title("Name", "title"),
			"기간" : NestedProperty.Date("Date", "iCuT")
		})
	})
})