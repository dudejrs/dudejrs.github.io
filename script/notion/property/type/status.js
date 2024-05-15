const Type = require('./type')

module.exports = class Status extends Type {
	constructor(name="status") {
		super(name)
	}

	convert(data) {
		return data[this.name]["name"]
	}
}