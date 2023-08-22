const { Client } = require('@notionhq/client');
const axios  = require('axios');
const fs = require('fs');

const {getDatabase, getPage} = require('./notion');
const {getPlans} = require('./notion/plan');
const {getDetailedPlansFromPlans} = require('./notion/detailedPlan')
const {getCodingPracticeAggregation} = require("./notion/codingPractice");


require('dotenv').config();


const planDirPath = 'public/data/plan';
const detailedPlanDirPath = 'public/data/detailedPlan'
const planMetaDataPath = `${planDirPath}/meta.json`
const codingPracticeDirPath = 'public/data/codingPractice'

const planFilterList = ['categories.json']

const tags = ["Javascript", "Java", "DBMS", "Backend", "DevOps", "Data Science", "Graphics"];

const langauges = ["Python","Javascript","C++","Java"]

const notion = new Client({
	auth : process.env.notion_integration_secret
});


const fetchPlans= ()=>{
	try{
		fs.rmdirSync(planDirPath,{recursive : true }, (err)=>{console.log(err)});
	} catch (error) {

	} finally{

		fs.mkdirSync(planDirPath ,(err)=>{console.log(err)});
	}

	getPlans(notion, tags, planDirPath, process.env.notion_integration_secret);
	writeMetaData(planDirPath);
}


const fetchDetailedPlans= ()=>{
	try{
		fs.rmdirSync(detailedPlanDirPath, {recursive:true}, (err)=>{console.log(err)});
	} catch (error) {
	} finally{
		fs.mkdirSync(detailedPlanDirPath ,(err)=>{console.log(err)});
	}


	getDetailedPlansFromPlans(planDirPath, detailedPlanDirPath, planFilterList, process.env.notion_integration_secret);
	writeMetaData(detailedPlanDirPath);
}

const fetchCodingPractice = ()=>{
	try {
		fs.rmdirSync(codingPracticeDirPath, {recursive:true}, (err)=>{console.log(err)})
	}catch(error){
	}finally {
		fs.mkdirSync(codingPracticeDirPath ,(err)=>{console.log(err)});
	}
	getCodingPracticeAggregation(notion, langauges, codingPracticeDirPath);
	writeMetaData(codingPracticeDirPath);
}

const writeMetaData = (dirPath)=>{
	const currentDateString = new Date(Date.now()).toISOString();
	const metaDataPath = `${dirPath}/meta.json`
	try {
		origin = JSON.parse(fs.readFileSync(metaDataPath));
		origin.updated = currentDateString.slice(0,10)
		fs.writeFileSync(metaDataPath, JSON.stringify(origin));
	}catch (error) {
		console.log(error);
	}
	finally{
		origin = {}
		origin.updated = currentDateString.slice(0,10)
		fs.writeFileSync(metaDataPath, JSON.stringify(origin));
	}
}




// fetchPlans();
// fetchDetailedPlans();
fetchCodingPractice();

