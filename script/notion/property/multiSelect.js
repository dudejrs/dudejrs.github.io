const Property = require('./property')

module.exports = class MultiSelectProperty extends Property {
	constructor(name, propertyName, type = "multi_select") {
		super(name, propertyName, type, innne)
	}

	convert(data) {
		return data[this.propertyName][this.type].map(item => item["name"]);
	}
}
