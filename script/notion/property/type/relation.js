const Type = require('./type')

module.exports = class Relation extends Type {

	constructor(property, name = "relation") {
		super(name)
		this.type = type
	}

	convert(data) {
		return type.convert(data[this.name]).map(item => item["id"])
	}
}
