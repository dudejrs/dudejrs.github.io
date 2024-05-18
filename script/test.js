const {getDatabase, getPage, getProperty} = require('./notion')
const {writeFileSync} = require('fs')

require('dotenv').config();

const NotionSDKClient = require('./notion/client/notionSDK');
const RateLimiterClient = require('./notion/client/rateLimiter')
const PaginationClient = require('./notion/client/pagination')
const AxiosClient = require('./notion/client/axios')


const {NestedProperty} = require('./notion/property');

const PlanScheme = require('./scheme/plan');
const {TimestampFilter, RelationFilter, ANDFilter} = require('./notion/filter');

// const {NestedDatabaseScheme} = require('./notion/scheme')


const notion = new PaginationClient(new RateLimiterClient(new NotionSDKClient(process.env.notion_integration_secret)));
const axiosc = new PaginationClient(new RateLimiterClient(new AxiosClient(process.env.notion_integration_secret)));

const {fetchCategories} = require('./data/categories')
const {fetchPlans, updatePlans} = require('./data/plans');

// (async ()=> {
// 	const page_id = "01786a32-24c9-485e-8fac-12957b	82406b"
// 	const response = await notion.retrievePage(page_id)

// 	await writeFileSync('public/test/page/detailed_plan.json', JSON.stringify(response), {encoding : 'utf-8'})
// })()


/* 페이지 가져와서 사후작업*/

// (async ()=> {
// 	const page_id = "1a5e28c1-78a6-4d67-9a09-47b7b419ae4f"
// 	const response = await notion.retrievePage(page_id)

// 	let data = await PlanScheme.convert(response, notion)

// 	await writeFileSync('public/test/c.json', JSON.stringify(data), {encoding : 'utf-8'})
// })();


/* 몇 일 이후의 데이터베이스 페이지들을 가져오기 */

// (async ()=> {
// 	const database_id = "12429ec59cb14e1ba82b3d77cedc7e9c"

// 	const filter = TimestampFilter.LastEditedTime("on_or_after", "2024-01-01").build()

// 	const {value : response} = await notion.queryDatabase(database_id, filter, undefined, undefined).next()

// 	await writeFileSync('public/test/d.json', JSON.stringify(response), {encoding : 'utf-8'})
// })();



/* 카테고리 저장하기*/

// const categories = ["Javascript","Typescript", "Node.js","React.js", "Angular", "Nest.js", "Java", "Kotlin","Spring Boot", "Spring", "JPA", "Spring WebFlux", "SQL","Oracle","MySQL", "MongoDB", "GraphQL", "\bC++", "Basic", "Backend", "Kafka", "Redis", "Go", "Linux", "Docker", "Kubernetices", "AWS", "Python","Tensorflow","Pytorch", "Data Science", "Scrapping","OpenGL", "WebGL", "Three.js", "D3.js"];

// (async ()=> {
// 	await fetchCategories.exec(notion, categories)
// })()


/* 플랜 모두 패치하기 */

(async()=> {
	await updatePlans.exec(notion)
})()