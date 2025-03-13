const {Scheme, GeneratorScheme, ContainerScheme, DatabaseScheme, PageScheme} = require('../notion/scheme')
const {NestedProperty, ComputedProperty, RelationProperty} = require('../notion/property')
const {DateType, StringType} = require('../notion/property/type')
const {ANDFilter, CheckBoxFilter, MultiSelectFilter, RelationFilter} = require('../notion/filter')
const {PropertySort} = require('../notion/sort')
const CertificateScheme = require('./certificate')

function generateScheme({category, skillID}) {
	const scheme = new Scheme("카테고리", {})

	scheme.addChild(new ContainerScheme("계획", {
			database_id : process.env.NOTION_PLAN_DATABASE_ID,
			scheme : new DatabaseScheme("계획" ,{
				scheme : new PageScheme("계획", {
				"title" :  NestedProperty.Title("Name","title"),
				"Status" : NestedProperty.Status("Status", "oz%3EA"),
				"기간" : ComputedProperty.Formula("기간","YTb%3D", new DateType()),
				"완료율" : ComputedProperty.Formula("완료율", "kT%3D%7D", new StringType()),
				})
			}),
			filter : MultiSelectFilter.Contains("Tag", category),
			sorts : PropertySort.Descending("Status").add(PropertySort.Descending("EndDate"))
		}))

	scheme.addChild(new ContainerScheme("자격증", {
		database_id : process.env.NOTION_CERTIFICATE_DATABASE_ID,
		scheme : new DatabaseScheme("자격증", {
			scheme : CertificateScheme
		}),
		filter : ANDFilter.of(CheckBoxFilter.Equals("_hidden",false), MultiSelectFilter.Contains("Tags", category))
	}))

	if (skillID) {
		scheme.addChild(new ContainerScheme("프로젝트", {
			database_id : process.env.NOTION_EXPERIENCE_PROJECT_DATABASE_ID,
			scheme : new DatabaseScheme("프로젝트", {
				scheme : new PageScheme("프로젝트", {
						"이름" : NestedProperty.Title("이름", "title"),
						"기간" : NestedProperty.Date("기간", "UocS"),
						"태그" : NestedProperty.MultiSelect("태그", "yJPS"),
						"기술" : new RelationProperty("기술", "YmTS", NestedProperty.Title("Name", "title")),
						"요약(50자)" : NestedProperty.RichText("요약(50자)", "%7CN%3AE"),
						"프로젝트URL" : NestedProperty.URL("프로젝트URL", "PrOR")
				})
			}),
			filter : ANDFilter.of(CheckBoxFilter.Equals("_hidden",false), RelationFilter.Contains("기술", skillID)),
			sorts : PropertySort.Descending("_EndDate")
		}))


		scheme.addChild(new ContainerScheme("실습", {
			database_id : process.env.NOTION_EXPERIENCE_PRACTICE_DATABASE_ID,
			scheme : new DatabaseScheme("실습", {
				scheme : new PageScheme("실습", {
					"이름" : NestedProperty.Title("이름", "title"),
					"기간" : NestedProperty.Date("기간", "km%60%7C"),
					"태그" : NestedProperty.MultiSelect("태그", "XAM%3F"),
					"기술" : new RelationProperty("기술", "FsGX", NestedProperty.Title("Name", "title")),
					"요약(50자)" : NestedProperty.RichText("요약(50자)", "lHUm"),
					"실습URL" : NestedProperty.URL("실습URL", "t%3ACR"),
				})
			}),
			filter : ANDFilter.of(CheckBoxFilter.Equals("_hidden",false), RelationFilter.Contains("기술", skillID)),
			sorts : PropertySort.Descending("_EndDate")
		}))
	}


	return [scheme]
}


module.exports = new GeneratorScheme("카테고리별 내역", generateScheme)