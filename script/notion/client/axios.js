const Client = require('./client');
const axios = require('axios');
const qs = require('qs');

module.exports = class AxiosClient extends Client {
    constructor(secret) {
        super();
        this.secret = secret;
    }

    createPage(database_id, properties) {
        throw new Error('Unsupported');
    }

    retrievePage(page_id) {
        throw new Error('Unsupported');
    }

    retrieveDatabase(database_id) {
        throw new Error('Unsupported');
    }

    async retrievePageProperties(page_id, property_id, start_cursor) {
        const response = await axios.get(
            `https://api.notion.com/v1/pages/${page_id}/properties/${property_id}`,
            {
                headers: {
                    Authorization: `Bearer ${this.secret}`,
                    'Notion-Version': '2022-06-28',
                },
                data: {
                    start_cursor,
                },
            },
        );

        return response['data'];
    }

    async queryDatabase(
        database_id,
        filter,
        sorts,
        start_cursor,
        filter_properties,
        page_size,
    ) {
        const response = await axios.post(
            `https://api.notion.com/v1/databases/${database_id}/query`,
            {
                filter,
                sorts,
                start_cursor,
            },
            {
                params: {
                    filter_properties,
                },

                paramsSerializer: function (params) {
                    return qs.stringify(params, {arrayFormat: 'repeat'});
                },

                headers: {
                    Authorization: `Bearer ${this.secret}`,
                    'Notion-Version': '2022-06-28',
                },
            },
        );

        return response['data'];
    }
};
