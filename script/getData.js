const { Client } = require('@notionhq/client');
const axios  = require('axios');
const fs = require('fs');

const {getDatabase, getPage} = require('./notion');
const {getPlans} = require('./notion/plan');
const {getDetailedPlansFromPlans} = require('./notion/detailedPlan')
const {getCodingPracticeAggregation, getAggregationByCategories} = require("./notion/codingPractice");


require('dotenv').config();


const planDirPath = 'public/data/plan';
const detailedPlanDirPath = 'public/data/detailedPlan'
const codingPracticeDirPath = 'public/data/codingPractice'

const planFilterList = ['categories.json']

const tags = ["Javascript", "Java", "DBMS", "Backend", "DevOps", "Data Science", "Graphics"];

const langauges = ["Python","Javascript","C++","Java"]

const notion = new Client({
	auth : process.env.notion_integration_secret
});


const fetchPlans= ()=>{
	try{
		fs.rmSync(planDirPath,{recursive : true }, (err)=>{console.log(err)});
	} catch (error) {
		console.log(error)
	} finally{

		fs.mkdirSync(planDirPath ,(err)=>{console.log(err)});
	}

	getPlans(notion, tags, planDirPath, process.env.notion_integration_secret);
	writeMetaData(planDirPath);
}


const fetchDetailedPlans= ()=>{
	try{
		fs.rmSync(detailedPlanDirPath, {recursive:true}, (err)=>{console.log(err)});
	} catch (error) {
		console.log(error);
	} finally{
		fs.mkdirSync(detailedPlanDirPath ,(err)=>{console.log(err)});
	}


	getDetailedPlansFromPlans(planDirPath, detailedPlanDirPath, planFilterList, process.env.notion_integration_secret);
	writeMetaData(detailedPlanDirPath);
}

const fetchCodingPractice = async ()=>{
	try {
		fs.rmSync(codingPracticeDirPath, {recursive:true}, (err)=>{console.log(err)})
	}catch(error){
		console.log(error);
	}finally {
		fs.mkdirSync(codingPracticeDirPath ,(err)=>{console.log(err)});
	}
	await getCodingPracticeAggregation(notion, langauges, codingPracticeDirPath, process.env.notion_integration_secret);
	writeMetaData(codingPracticeDirPath);
}

const writeMetaData = (dirPath)=>{
	const currentDateString = new Date(Date.now()).toISOString();
	const metaDataPath = `${dirPath}/meta.json`
	try {
		let origin = {}
		if(fs.existsSync(metaDataPath)){
			origin = JSON.parse(fs.readFileSync(metaDataPath));
		}
		origin.updated = currentDateString.slice(0,10)
		fs.writeFileSync(metaDataPath, JSON.stringify(origin), {flag :'w'});
	}catch (error) {
		console.log(error);
	}
}



const fetchRoutine= ()=>{

	switch(process.argv[2]){
		case "plan":
			fetchPlans();
			fetchDetailedPlans();
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
		default :
			break;
	}

}

fetchRoutine();

