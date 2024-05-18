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

	static applyID(config) {
		if (!(config["database_id"])) {
			throw new Error("DatabaseScheme must have database_id") 
		}

		return config["database_id"]
	}

	static applyFilter(config) {
		return config["filter"]
	}

	static applySorts(config) {
		return config["sorts"]
	}

	async convert(data, client, parent_id = null) {
		const ret = []

		for await(let page of data) {
			ret.push(await this.scheme.convert(page, client))
		}

		return ret
	}
}