const Property = require('./property')
const {RelationType} = require('./type')

module.exports = class RelationProperty extends Property {
 
	constructor(name, id, property, rename) {
		super(name, id, new RelationType(), property, rename)
		this.property = property
		this.cache = new Map()
	}

	async convert(data, client) {
		const ret = []
		const _page_id = data["id"]
		const property_id = data["properties"][this.name]["id"]
		const response = await client.retrievePageProperties(_page_id, property_id)

		for await (let {results} of response) {
			const ids = this.type.convert(results)
			for (let page_id of ids) {
				if (!this.cache.has(page_id)) {
					const page = await client.retrievePage(page_id)
					this.cache.set(page_id, await this.property.convert(page))
				}
				ret.push(this.cache.get(page_id))
			}
		}

		return ret
	}
}