const {getDatabase, getPage, getProperty} = require('./notion')
const {writeFileSync} = require('fs')

require('dotenv').config();

const NotionSDKClient = require('./notion/client/notionSDK');
const RateLimiterClient = require('./notion/client/rateLimiter')
const PaginationClient = require('./notion/client/pagination')

const notion = new PaginationClient(new RateLimiterClient(new NotionSDKClient(process.env.notion_integration_secret)));

(async ()=> {
	const page_id = "1e5b05dc-00b5-4d9b-9012-b76f266b635e"
	const database_id = "12429ec59cb14e1ba82b3d77cedc7e9c"
	// const response = await notion.retrievePage(page_id)
	const response = await notion.queryDatabase(database_id).next()
	await writeFileSync('public/test/b.json', JSON.stringify(response), {encoding : 'utf-8'})
})()
