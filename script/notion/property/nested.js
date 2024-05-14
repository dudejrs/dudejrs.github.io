const CheckboxProperty = require('./checkbox')
const DateProperty = require('./date')
const MultiSelectProperty = require('./multiSelect')
// const FormulaProperty = require('./formula')
// const RollupProperty = require('./rollup')
const RichTextProperty = require('./richText')
const SelectProperty = require('./select')
const StatusProperty = require('./status')
const TitleProperty = require('./title')

module.exports = class NestedProperty {

	constructor(property) {
		this.property = property
	}

	static Checkbox(name, propertyName){
		return new NestedProperty(new CheckboxProperty(name, propertyName))
	}

	static Date(name, propertyName) {
		return new NestedProperty(new DateProperty(name, propertyName))
	}

	static MultiSelect(name, propertyName) {
		return new NestedProperty(new MultiSelectProperty(name, propertyName))
	}

	static RichText(name, propertyName) {
		return new NestedProperty(new RichTextProperty(name, propertyName))
	}

	static Select(name, propertyName) {
		return new NestedProperty(new SelectProperty(name, propertyName))
	}

	static Status(name, propertyName) {
		return new NestedProperty(new SelectProperty(name, propertyName))
	}

	static Title(name, propertyName) {
		return new NestedProperty(TitleProperty(name, propertyName))
	}

	convert(data) {
		return this.property.convert(data["properties"])
	}
}