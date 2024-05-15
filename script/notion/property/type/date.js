const Type = require('./type')

module.exports = class Date extends Type {
	constructor(name = "date") {
		super(name)
	}

	convert(data) {
		const {start, end} =  data[this.name]
		return {start, end}
	}
}
