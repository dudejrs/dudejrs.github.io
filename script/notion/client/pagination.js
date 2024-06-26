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

	retrieveDatabase(database_id) {
		return this.client.retrieveDatabase(database_id)
	}

	updatePage(page_id, properties) {
		return this.client.updatePage(page_id, properties)
	}

	async *retrievePageProperties(page_id, property_id){
		let start_cursor = undefined
		while(true) {
			const response = await this.client.retrievePageProperties(page_id, property_id, start_cursor)
			const {has_more, next_cursor} = response
			yield response
			
			if (has_more) {
				start_cursor = next_cursor
			} else {
				break
			}
		}
		return
	}

	async *queryDatabase(database_id, filter, sorts, start_cursor = undefined, filter_properties = undefined, page_size = undefined){
		
		while(true) {
			const response = await this.client.queryDatabase(database_id, filter, sorts, start_cursor, filter_properties, page_size)
			const {has_more, next_cursor} = response
			yield response
			
			if (has_more) {
				start_cursor = next_cursor
			} else {
				break
			} 

		}
		return 
	}
}