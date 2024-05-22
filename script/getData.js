const { Client } = require('@notionhq/client');
const axios  = require('axios');
const fs = require('fs');

const {getDatabase, getPage} = require('./notion');
const {getCodingPracticeAggregation} = require("./notion/codingPractice");
const {cleanDirExcept, writeMetaData} = require('./util')
require('dotenv').config();

const {fetchPlans, updatePlans} = require('./data/plans')
const {fetchCategories, calculateCount} = require('./data/categories')
const {getTotalProblem, getAggregationByCategories, getAggregationByProblemType} = require('./data/codingPractice')


const NotionSDKClient = require('./notion/client/notionSDK');
const RateLimiterClient = require('./notion/client/rateLimiter')
const PaginationClient = require('./notion/client/pagination')
const AxiosClient = require('./notion/client/axios')

const codingPracticeDirPath = 'public/data/codingPractice'

const tags = ["Javascript", "Java", "DBMS", "Backend", "DevOps", "Data Science", "Graphics"];
const languages = ["Python","Javascript","C++","Java", "Go", "Kotlin", "Typescript"];
const categories = ["Javascript","Typescript", "Node.js","React", "Angular", "Nest.js", "Java", "Kotlin","Spring Boot", "Spring", "JPA", "Spring WebFlux", "SQL","Oracle","MySQL", "MongoDB", "GraphQL", "C++", "Basic", "Backend", "Kafka", "Redis", "Go", "Linux", "Docker", "Kubernetices", "AWS", "Python","Tensorflow","PyTorch", "Data Science", "Scrapping","OpenGL", "WebGL", "Three.js", "D3.js"];

const notion = new Client({
	auth : process.env.notion_integration_secret
});

const client = new PaginationClient(new RateLimiterClient(new NotionSDKClient(process.env.notion_integration_secret)));

// const fetchCodingPractice = async ()=>{
// 	try {
// 		cleanDirExcept(codingPracticeDirPath,['meta.json', 'log.json'])
// 	}catch(error){
// 		console.log(error);
// 	}
// 	await getCodingPracticeAggregation(notion, languages, codingPracticeDirPath, process.env.notion_integration_secret);
// 	writeMetaData(codingPracticeDirPath);
// }

const fetchRoutine = async ()=>{
	const [maincommand, subcommand] = process.argv.slice(2,4)

	switch(maincommand){
		case "plan":
			if (subcommand == "all") {
				fetchPlans.exec({client});
				break;
			}
			updatePlans.exec({client})
			break;

		case "categories" :
			if (subcommand) {
				fetchCategories.exec({client, categories : process.argv.slice(3)})
				break;
			}
			fetchCategories.exec({client, categories})
			break;

		case "count" :
			calculateCount.exec({client, categories})
			break;

		case "cote":
			await getTotalProblem.exec({client, languages})
			await getAggregationByCategories.exec({client})
			await getAggregationByProblemType.exec({client, languages})

			break;
		case "all" :
			fetchPlans();
			fetchDetailedPlans();
			fetchCodingPractice();
			break;
		case "test" :
			break;
		default :
			break;
	}

}
	
fetchRoutine();

