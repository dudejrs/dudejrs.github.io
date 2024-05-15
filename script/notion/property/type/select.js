const Type = require('./type')

module.exports = class Select extends Type {
	constructor(name="select") {
		super(name)
	}

	convert(data) {
		return data[this.name]["name"]
	}
}