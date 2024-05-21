const {Property} = require('../property')
const Scheme = require('./scheme')


module.exports = class PageScheme extends Scheme{
	constructor(name, config){
		super(name, config)
		this._properties = PageScheme.applyProperties(config) 
	}

	static applyProperties(config) {
		return Object.entries(config)
			.filter(e => e[1] instanceof Property)
			.map(e => {
				e[1].rename = e[0]
				return e[1]
			})
	}

	addProperties(property) {
		this._properties.push(property)
		return this
	}

	async convert(data, {client, parent_id}) {
		const ret = {}

		ret["id"] = data["id"]

		for (let property of this._properties) {
			ret[property.rename] = await property.convert(data, client)
		}

		for (let child of this.children) {
			ret[child.name] = await child.convert(data, {client, parent_id : data["id"]})
		}
		
		return ret
	}

	get properties() {
		return this._properties.map(property => property.id)
	}
}