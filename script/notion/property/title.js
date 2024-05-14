const Property = require('./property')

module.exports = class TitleProperty extends Property {
	constructor(name, propertyName, type="title") {
		this.name = name
		this.propertyName = propertyName
		this.type = type
	}

	convert(data) {
		return data[this.propertyName][this.type].map(t => t["plain_text"]).join("")
	}
}