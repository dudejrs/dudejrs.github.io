const Type = require('./type')

module.exports = class Relation extends Type {

	constructor(name = "relation") {
		super(name)
	}

	convert(data) {
		return data.map(item => item[this.name]["id"])
	}
}
