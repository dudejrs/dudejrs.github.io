const Property = require('./property')

module.exports = class DateProperty extends Property {
	constructor(name, propertyName, type = "date") {
		super(name, propertyName, type)
	}

	convert(data) {
		const {start, end} =  data[this.propertyName][this.type]
		return {start, end}
	}
}
