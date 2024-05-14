const Property = require('./property')

module.exports = class SelectProperty extends Property {
	constructor(name, propertyName, type="select") {
		this.name = name
		this.propertyName = propertyName
		this.type = type
	}

	convert(data) {
		return data[this.propertyName][this.type]["name"]
	}
}