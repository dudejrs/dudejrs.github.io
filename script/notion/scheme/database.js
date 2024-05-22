const Scheme = require('./scheme')
const PageScheme = require('./page')


module.exports = class DatabaseScheme extends Scheme{
	constructor(name, config){
		super(name, config)
		this.scheme = DatabaseScheme.applyPageScheme(config)
	}

	static applyPageScheme(config) {
		if(!(config["scheme"] instanceof PageScheme)) {
			throw new Error("DatabaseScheme must have PageScheme")
		}

		return config["scheme"] 
	} 

	async convert(data, {client}) {
		const ret = []

		for await(let page of data) {
			let d = await this.scheme.convert(page, {client})
			
			if (!Scheme.isFalsy(d)) {
				ret.push(d)
			}
		}

		return ret
	}
}