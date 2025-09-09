module.exports = class Client {
    constructor() {}

    createPage(database_id, properties) {
        throw new Error(`Unsupported Operation : ${ database_id } ${properties}`);
    }

    retrievePage(page_id) {
        throw new Error(`Unsupported Operation : ${ page_id }`);
    }

    updatePage(page_id, properties) {
        throw new Error(`Unsupported Operation : ${ properties }`);
    }

    retrieveDatabase(database_id) {
        throw new Error(`Unsupported Operation : ${ database_id }`);
    }

    // eslint-disable-next-line require-yield
    *retrievePageProperties(page_id, property_id, start_cursor) {
        throw new Error(`Unsupported Operation : ${ page_id } - ${ property_id } - ${start_cursor}`);
    }

    // eslint-disable-next-line require-yield
    *queryDatabase(
        database_id,
        filter,
        sorts,
        start_cursor,
        filter_properties,
        page_size,
    ) {
        throw new Error(`Unsupported Operation : ${ database_id } ${filter} ${sorts} ${start_cursor} ${filter_properties} ${page_size}`);
    }
};
