const Property = require('./property')

module.exports = class RollupProperty extends Property {

	static Array(name, propertyName) {
		return new RollupProperty(name, propertyName, "rollup", "array")
	} 

	static Date(name, propertyName) {
		return new RollupProperty(name, propertyName, "rollup", "date")
	}

	static Number(name, propertyName) {
		return new RollupProperty(name, propertyName, "rollup", "number")
	}

	constructor(name, propertyName, type = "rollup", rtype = "array") {
		super(name, propertyName, type, innne)
	}

	convert(data) {
		return {}
	}
}
