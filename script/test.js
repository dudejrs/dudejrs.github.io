const {getDatabase, getPage, getProperty} = require('./notion')
const {writeFileSync} = require('fs')

require('dotenv').config();

const NotionSDKClient = require('./notion/client/notionSDK');
const RateLimiterClient = require('./notion/client/rateLimiter')
const PaginationClient = require('./notion/client/pagination')


const {NestedProperty} = require('./notion/property');

const PlanScheme = require('./scheme/plan');

// const {NestedDatabaseScheme} = require('./notion/scheme')

// (async ()=> {
// 	const notion = new PaginationClient(new RateLimiterClient(new NotionSDKClient(process.env.notion_integration_secret)));
// 	const page_id = "01786a32-24c9-485e-8fac-12957b82406b"
// 	const response = await notion.retrievePage(page_id)

// 	await writeFileSync('public/test/page/detailed_plan.json', JSON.stringify(response), {encoding : 'utf-8'})
// })()



(async ()=> {
	const notion = new PaginationClient(new RateLimiterClient(new NotionSDKClient(process.env.notion_integration_secret)));

	const page_id = "1e5b05dc-00b5-4d9b-9012-b76f266b635e"
	// const database_id = "12429ec59cb14e1ba82b3d77cedc7e9c"
	const response = await notion.retrievePage(page_id)

	let data = await PlanScheme.convert(response, notion)
	// const response = await notion.queryDatabase(database_id, undefined, undefined, ["title"]).next()
	console.log(data)
	await writeFileSync('public/test/c.json', JSON.stringify(data), {encoding : 'utf-8'})
})();
