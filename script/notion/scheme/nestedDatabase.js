const Scheme = require('./scheme')
const PageScheme = require('./page')


module.exports = class NestedDatabaseScheme extends Scheme{
	constructor(name, config){
		super(name, config)
		this.scheme = NestedDatabaseScheme.applyPageScheme(config)
		this.database_id = NestedDatabaseScheme.applyID(config)
		this.filter = NestedDatabaseScheme.applyFilter(config)
		this.sorts = NestedDatabaseScheme.applySorts(config)
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

	async convert(data, client, parent_id) {
		const ret = []
		const results = []
		// const {results} = await client.queryDatabase(this.database_id, this.filter, this.sorts, undefined, this.scheme.properties)

		for (let page of results) {
			ret.push(scheme.convert(page))
		}

		return ret
	}
}