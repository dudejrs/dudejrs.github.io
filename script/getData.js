const { Client } = require('@notionhq/client');
const axios  = require('axios');
const fs = require('fs');

const {getDatabase, getPage} = require('./notion');
const {getPlans} = require('./notion/plan');
const {getDetailedPlansFromPlans} = require('./notion/detailedPlan')

require('dotenv').config();


const planDirPath = 'public/data/plan';
const detailedPlanDirPath = 'public/data/detailedPlan'

const planFilterList = ['categories.json']

const tags = ["Java","Spring", "Spring Boot", "Frontend", "Node.js", "Javascript", "Backend", "빅데이터분석기사", "Data Scientist", "SQLP", "DBMS Administrator", "OpenGL", "Graphics", "React.js", "리눅스마스터", "Linux", "DevOps"];

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
}


const fetchDetailedPlans= ()=>{
	try{
		fs.rmdirSync(detailedPlanDirPath, {recursive:true}, (err)=>{console.log(err)});
	} catch (error) {
	} finally{
		fs.mkdirSync(detailedPlanDirPath ,(err)=>{console.log(err)});
	}


	getDetailedPlansFromPlans(planDirPath, detailedPlanDirPath, planFilterList, process.env.notion_integration_secret);

}


// fetchPlans();
fetchDetailedPlans();
