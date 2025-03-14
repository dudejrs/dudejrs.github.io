const {PageScheme} = require('../../notion/scheme')
const {NestedProperty, ComputedProperty, RelationProperty} = require('../../notion/property')
const {NumberType} = require('../../notion/property/type')

module.exports = new PageScheme("codingPractice",{
		"문제이름 " : NestedProperty.Title("문제이름", "title"),
		"Repetition" :  ComputedProperty.Formula("Repetition", "XcSt", new NumberType()),
		"문제유형" :  NestedProperty.MultiSelect("문제유형", "sEq%5C"),
		"C++" : NestedProperty.Number("C++", "%7DooA"),
		"Java" : NestedProperty.Number("Java", "w%40%7CA"),
		"Javascript" : NestedProperty.Number("Javascript", "f~TP"),
		"Python" : NestedProperty.Number("Python", "%7Ch%5EN"),
		"Go" : NestedProperty.Number("Go", "Kw%3Dg"),
		"Kotlin" : NestedProperty.Number("Kotlin", "YX~d"),
		"Typescript" : NestedProperty.Number("Typescript", "X%7CuG"),
		"Rust" : NestedProperty.Number("Rust", "X%7CuG"),
		"카테고리" : new RelationProperty("코딩연습 카테고리", "hA%40%5C", NestedProperty.Title("Name", "title")),
	});