module.exports = class PaginationClient {
	
	constructor(client){
		this.client = client
	}

	createPage(database_id, properties){
		return this.client.createPage(database_id, properties)
	}

	retrievePage(page_id){
		return this.client.retrievePage(page_id)
	}

	async retrievePageProperties(page_id, property_id, start_cursor){
		let start_cursor = undefined
		
		while(true) {
			const response = await this.client.queryDatabase(database_id, filter, sorts, start_cursor)
			const {has_more, next_cursor} = response
			
			if (has_more) {
				start_cursor = next_cursor
				yield response
			} else {
				return response
			}
		}
	}

	async *queryDatabase(database_id, filter, sorts){
		let start_cursor = undefined
		
		while(true) {
			const response = await this.client.queryDatabase(database_id, filter, sorts, start_cursor)
			const {has_more, next_cursor} = response
			
			if (has_more) {
				start_cursor = next_cursor
				yield response
			} else {
				return response
			}
		}
	}
}