module.exports = class Client {
	constructor(){}

	createPage(database_id, properties){
		throw new Error("Unsupported")
	}

	retrievePage(page_id){
		throw new Error("Unsupported")
	}

	retrievePageProperties(page_id, property_id, start_cursor){
		throw new Error("Unsupported")
	}

	queryDatabase(database_id, filter, sorts, start_cursor, filter_properties){
		throw new Error("Unsupported")
	}
}