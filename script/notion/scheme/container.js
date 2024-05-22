const Scheme = require('./scheme')
const DatabaseSheme = require('./database')
 
module.exports = class ContainerScheme extends Scheme {
	constructor(name, config){
		super(name, config)
		this.scheme = ContainerScheme.applyDatabaseScheme(config)
		this.database_id = ContainerScheme.applyID(config)
		this.filter = ContainerScheme.applyFilter(config)
		this.sorts = ContainerScheme.applySorts(config)
	}

	static applyDatabaseScheme(config) {
		if(!(config["scheme"] instanceof DatabaseSheme)) {
			throw new Error("ContainerScheme must have DatabaseSheme")
		}

		return config["scheme"] 
	} 

	static applyID(config) {
		if (!(config["database_id"])) {
			throw new Error("ContainerScheme must have database_id") 
		}

		return config["database_id"]
	}

	static applyFilter(config) {
		return config["filter"]
	}

	static applySorts(config) {
		return config["sorts"]
	}

	async convert(data, {client}) {
		const ret = []
		const response = await client.queryDatabase(this.database_id, this.filter.build(), this.sorts)

		for await (let {results} of response) {
			let d = await this.scheme.convert(results, {client})
			if (!Scheme.isFalsy(d)) {
				ret.push(...d)
			}
		}

		return ret
	}
}