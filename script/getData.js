
const {getDatabase, getPage} = require('./notion');

require('dotenv').config();

const {fetchPlans, updatePlans} = require('./data/plans')
const {fetchCategories, calculateCount} = require('./data/categories')
const {getTotalProblem, getAggregationByCategories, getAggregationByProblemType, fetchLog} = require('./data/codingPractice')
const {fetchActivitiesPerQuarter, fetchActivitiesPerMonth} = require('./data/activities')
const {fetchProjects, fetchPractices} = require('./data/experience')

const NotionSDKClient = require('./notion/client/notionSDK');
const RateLimiterClient = require('./notion/client/rateLimiter')
const PaginationClient = require('./notion/client/pagination')
const AxiosClient = require('./notion/client/axios')

const tags = ["Javascript", "Java", "DBMS", "Backend", "DevOps", "Data Science", "Graphics"];
const languages = ["Python","Javascript","C++","Java", "Go", "Kotlin", "Typescript", "Rust"];
const categories = ["Javascript","Typescript", "Node.js","React", "Angular", "Nest.js", "Java", "Kotlin","Spring Boot", "Spring", "JPA", "Spring WebFlux", "SQL","Oracle","MySQL", "MongoDB", "GraphQL", "C++", "Basic", "Backend", "Kafka", "Redis", "Go", "Linux", "Docker", "Kubernetices", "AWS", "Python","Tensorflow","PyTorch", "Data Science", "Scrapping","OpenGL", "WebGL", "Three.js", "D3.js"];

const client = new PaginationClient(new RateLimiterClient(new NotionSDKClient(process.env.NOTION_INTEGRATION_SECRET)));

const fetchRoutine = async (args)=>{
	const [maincommand, subcommand] = args.slice(0,2)

	switch(maincommand){
		case "plan":
			if (subcommand == "all") {
				await fetchPlans.exec({client});
				break;
			}
			await updatePlans.exec({client})
			break;

		case "categories" :
			if (subcommand) {
				await fetchCategories.exec({client, categories : args.slice(1)})
				break;
			}
			await fetchCategories.exec({client, categories})
			break;

		case "count" :
			await calculateCount.exec({client, categories})
			break;

		case "cote":
			if (!subcommand || subcommand === "log")  {
				await fetchLog.exec({client})
			}

			await getTotalProblem.exec({client, languages})
			await getAggregationByCategories.exec({client})
			await getAggregationByProblemType.exec({client, languages})

			break;

		case "activities" :
			if (!subcommand || subcommand === "quarter") {
				await fetchActivitiesPerQuarter.exec({client})
			}
			if (!subcommand || subcommand === "month") {
				await fetchActivitiesPerMonth.exec({client})
			}
			break;

		case "experience" :
			if (!subcommand || subcommand === "practice") {
				await fetchPractices.exec({client})
			}
			if (!subcommand || subcommand === "projects") {
				await fetchProjects.exec({client})
			}
			break;

		case "portfolio" :
			if (args.slice(1).length == 2) {
				const target = require(`${process.env.PWD}/script/data/portfolio/${args[1]}/${args[2]}`)
				await target.exec({client})
			}
			break;

		case "all" :
			["plan", "categories", "cote"].forEach(cmd => fetchRoutine(cmd))
			break;

		case "test" :
			console.log("Hello World")
			break;

		default :
			break;
	}

}
	
fetchRoutine(process.argv.slice(2));

