const Property = require('./property')
const {FormulaType, RollupType} = require('./type')

module.exports = class ComputedProperty extends Property {
 
	constructor(name, id, type, rename) {
		super(name, id, type, rename)
	}

	static Formula(name, id, type, rename) {
		return new ComputedProperty(name, id, new FormulaType(type), rename)
	}

	static Rollup(name, id, type, rename) {
		return new ComputedProperty(name, id, new RollupType(type), rename)
	}

	async convert(data, client) {
		const page_id = data["id"]
		const property_id = data["properties"][this.name]["id"]
		const response = await client.retrievePageProperties(page_id, property_id).next()

		return this.type.convert(response.value)
	}
}