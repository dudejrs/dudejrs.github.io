const Type = require('./type')

module.exports = class MultiSelect extends Type {
	constructor(name = "multi_select") {
		super(name)
	}

	convert(data) {
		return data[this.name].map(item => item["name"]);
	}
}
