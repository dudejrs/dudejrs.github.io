const axios = require('axios');

async function getDatabase(databaseId, secret) {
    return axios.get(`https://api.notion.com/v1/databases/${databaseId}`, {
        headers: {
            Authorization: `Bearer ${secret}`,
            'Notion-Version': '2022-06-28',
        },
    });
}

async function getPage(pageId, secret) {
    return axios.get(`https://api.notion.com/v1/pages/${pageId}`, {
        headers: {
            Authorization: `Bearer ${secret}`,
            'Notion-Version': '2022-06-28',
        },
    });
}

async function getProperty(pageId, propertyId, secret) {
    return axios.get(
        `https://api.notion.com/v1/pages/${pageId}/properties/${propertyId}`,
        {
            headers: {
                Authorization: `Bearer ${secret}`,
                'Notion-Version': '2022-06-28',
            },
        },
    );
}

module.exports = {getDatabase, getPage, getProperty};
