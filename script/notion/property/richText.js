const Property = require('./property')

module.exports = class RichTextProperty extends Property {
	constructor(name, propertyName, type = "rich_text") {
		super(name, propertyName, type)
	}

	convert(data) {
		return data[this.propertyName][this.type].map(t => t["plain_text"]).join("")
	}
}