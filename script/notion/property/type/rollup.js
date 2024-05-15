const Type = require('./type')

module.exports = class Rollup extends Type {

	constructor(property, name = "rollup") {
		super(name)
		this.type = type
	}

	convert(data) {
		return type.convert(data[this.name])
	}
}
