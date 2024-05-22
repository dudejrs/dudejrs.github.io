const Scheme = require('./scheme')
const PageScheme = require('./page')
const {ANDFilter, RelationFilter} = require('../filter')


module.exports = class NestedDatabaseScheme extends Scheme{
	constructor(name, config){
		super(name, config)
		this.relation_property_name = NestedDatabaseScheme.applyRelationPropertyName(config)
		this.scheme = NestedDatabaseScheme.applyPageScheme(config)
		this.database_id = NestedDatabaseScheme.applyID(config)
		this.filter = NestedDatabaseScheme.applyFilter(config)
		this.sorts = NestedDatabaseScheme.applySorts(config)
	}

	static applyRelationPropertyName(config) {
		if (!(config["relation_property_name"])) {
			throw new Error("DatabaseScheme must have relation_property_name") 
		}

		return config["relation_property_name"]
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

	async convert(data, {client, parent_id}) {
		const ret = []
		
		let filter = ANDFilter.of(RelationFilter.Contains(this.relation_property_name, parent_id), this.filter).build()

		const response = client.queryDatabase(this.database_id, filter, this.sorts.build(), undefined, undefined)
		
		for await(let {results} of response) {
			for (let page of results) {
				ret.push(await this.scheme.convert(page, {client}))
			}
		}

		return ret
	}
}