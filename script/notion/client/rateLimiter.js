const {RateLimiter} = require("limiter")

module.exports = class RateLimiterClient {

	constructor(client, interval = 100){
		this.client = client
		this.limiter = new RateLimiter({tokensPerInterval : 1, interval})
	}

	async createPage(database_id, properties){
		await this.limiter.removeTokens(1);
		return this.client.createPage(database_id, properties)
	}

	async retrievePage(page_id){
		await this.limiter.removeTokens(1);
		return this.client.retrievePage(page_id)
	}

	async retrievePageProperties(page_id, property_id, start_cursor){
		await this.limiter.removeTokens(1);
	
		return await this.client.retrievePageProperties(page_id, property_id, start_cursor)
	}

	async queryDatabase(database_id, filter, sorts, start_cursor, filter_properties){
		await this.limiter.removeTokens(1);
		return this.client.queryDatabase(database_id, filter, sorts, start_cursor, filter_properties)
	}
}