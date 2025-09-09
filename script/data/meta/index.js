const {writeFileSync} = require('fs');

const {FileJob} = require('../../job');

function refineProperty(property) {
    const [name, {id, type}] = property;
    return {name, id, type};
}

async function getMetaData({client, databases, path}) {
    const ret = {};

    for (let database_id of databases) {
        const data = await client.retrieveDatabase(database_id);
        const title = data['title'][0]['plain_text'];
        const properties = Object.entries(data['properties']).map(
            refineProperty,
        );

        ret[title] = properties;
    }

    await writeFileSync(path, JSON.stringify(ret), {encoding: 'utf-8'});
}

const getMetaData_ = new FileJob({
    name: 'notion 각 데이터베이스의 메타데이터를 도출',
    path: `${process.env.PWD}/public/data/meta.json`,
    exec: getMetaData,
    handelError: console.error,
});

module.exports = {
    getMetaData: getMetaData_,
};
