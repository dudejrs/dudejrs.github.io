const Type = require('./type')

module.exports = class Checkbox extends Type {
	constructor(name = "checkbox") {
		super(name)
	}

	convert(data) {
		return data[this.name]
	}
}