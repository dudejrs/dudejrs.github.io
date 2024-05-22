const { Client } = require('@notionhq/client');
const Client_ = require('./client')

module.exports = class NotionSDKClient extends Client_ {
	
	constructor(secret){
		super()
		this.client = new Client({
			auth : secret
		});

	}

	async createPage(database_id, properties){
		const response = await this.client.pages.create({
			parent : {
				"type" : "database_id",
				database_id
			},
			properties
		})

		return response
	}

	async retrievePage(page_id){
		const response = await this.client.pages.retrieve({
			page_id
		})

		return response
	}

	async retrieveDatabase(database_id) {
		const response = await this.client.databases.retrieve({
			database_id
		})
		
		return response
	}

	async updatePage(page_id, properties) {
		const response = await this.client.pages.update({
			page_id, properties
		})
	}

	async retrievePageProperties(page_id, property_id, start_cursor){
		const response = await this.client.pages.properties.retrieve({
			page_id, property_id
		})

		return response
	}

	async queryDatabase(database_id, filter, sorts, start_cursor, filter_properties, page_size){
		const response = await this.client.databases.query({
			database_id,
			filter,
			sorts,
			start_cursor,
			filter_properties,
			page_size
		})

		return response
	}
}