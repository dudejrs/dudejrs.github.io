const Type = require('./type')

module.exports = class Formula extends Type {
	constructor(type, name = "formula") {
		super(name)
		this.type = type
	}

	convert(data) {
		return this.type.convert(data[this.name])
	}
}
