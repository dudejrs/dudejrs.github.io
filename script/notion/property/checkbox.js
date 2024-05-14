const Property = require('./property')

module.exports = class CheckboxProperty extends Property {
	constructor(name, propertyName, type = "checkbox") {
		super(name, propertyName, type)
	}

	convert(data) {
		return data[this.propertyName][this.type]
	}
}