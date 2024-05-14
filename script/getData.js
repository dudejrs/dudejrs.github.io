const { Client } = require('@notionhq/client');
const axios  = require('axios');
const fs = require('fs');

const {getDatabase, getPage} = require('./notion');
const {getPlans} = require('./notion/plan');
const {getDetailedPlansFromPlans} = require('./notion/detailedPlan')
const {getCodingPracticeAggregation} = require("./notion/codingPractice");
const {cleanDirExcept, writeMetaData} = require('./util')

require('dotenv').config();

// const planDirPath = 'public/data_/plan';
// const detailedPlanDirPath = 'public/data_/detailedPlan'
// const codingPracticeDirPath = 'public/data_/codingPractice'

const planDirPath = 'public/data/plan';
const detailedPlanDirPath = 'public/data/detailedPlan'
const codingPracticeDirPath = 'public/data/codingPractice'

const planFilterList = ['categories.json']

const tags = ["Javascript", "Java", "DBMS", "Backend", "DevOps", "Data Science", "Graphics"];

const langauges = ["Python","Javascript","C++","Java", "Go", "Kotlin", "Typescript"]

const notion = new Client({
	auth : process.env.notion_integration_secret
});


const fetchPlans= ()=>{
	try{
		cleanDirExcept(planDirPath, ['meta.json'])	
	} catch (error) {
		console.log(error)
	} 

	getPlans(notion, tags, planDirPath, process.env.notion_integration_secret);
	writeMetaData(planDirPath);
}

const fetchDetailedPlans= ()=>{
	try{
		cleanDirExcept(detailedPlanDirPath, ['meta.json'])
	} catch (error) {
		console.log(error);
	} 


	getDetailedPlansFromPlans(planDirPath, detailedPlanDirPath, planFilterList, process.env.notion_integration_secret);
	writeMetaData(detailedPlanDirPath);
}

const fetchCodingPractice = async ()=>{
	try {
		cleanDirExcept(codingPracticeDirPath,['meta.json', 'log.json'])
	}catch(error){
		console.log(error);
	}
	await getCodingPracticeAggregation(notion, langauges, codingPracticeDirPath, process.env.notion_integration_secret);
	writeMetaData(codingPracticeDirPath);
}

const fetchRoutine = ()=>{

	switch(process.argv[2]){
		case "plan":
			fetchPlans();
			// fetchDetailedPlans();
			break;
		case "detailedPlan" :
			fetchDetailedPlans();
			break;
		case "cote":
			fetchCodingPractice();
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

