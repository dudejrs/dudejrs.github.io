const Property = require('./property')

module.exports = class NumberProperty extends Property {
	constructor(name, propertyName, type = "number") {
		super(name, propertyName, type)
	}

	convert(data) {
		return data[this.propertyName][this.type]
	}
}