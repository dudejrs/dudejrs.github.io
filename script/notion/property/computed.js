const {FormulaType, RollupType} = require('./type')

module.exports = class ComputedProperty {
 
	constructor(name, type, rename) {
		this.name = name
		this.type = type
		this.rename = rename ? rename : name
	}

	static Formula(name, type) {
		return new ComputedProperty(name, new FormulaType(type))
	}

	static Rollup(name, type) {
		return new ComputedProperty(name, new RollupType(type))
	}

	async convert(data, client) {
		const page_id = data["id"]
		const property_id = data["properties"][this.name]["id"]
		const response = await client.retrievePageProperties(page_id, property_id)

		return this.type.convert(response)
	}
}