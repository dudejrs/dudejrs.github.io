const {getDatabase, getPage, getProperty} = require('./notion')
const {writeFileSync} = require('fs')

require('dotenv').config();

const { Client } = require('@notionhq/client');

const notion = new Client({
	auth : process.env.notion_integration_secret
});

// (async ()=> {
// 	const page_id = "1e5b05dc-00b5-4d9b-9012-b76f266b635e"
// 	const response = await notion.pages.retrieve({page_id})
// 	await writeFileSync('public/test/plan.json', JSON.stringify(response), {encoding : 'utf-8'})
// })()
