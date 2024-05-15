const Type = require('./type')

module.exports = class RichText extends Type {
	constructor(name = "rich_text") {
		super(name)
	}

	convert(data) {
		return data[this.name].map(t => t["plain_text"]).join("")
	}
}