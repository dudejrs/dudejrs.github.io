const {getProperty} = require('./index.js'); 
const fs = require('fs');

async function getCodingPracticeAggregation(notion, langauges, dirPath, secret){
	let totalProblem = await getTotalProblems(notion, langauges);
	let aggregationByCategries = await getAggregationByCategories(notion, langauges, secret);
	let aggregationByProblemType = await getAggregationByProblemType(notion, langauges);

	fs.writeFile(`${dirPath}/totalProblem.json`, JSON.stringify(totalProblem), (err)=>{console.log(err);});
	fs.writeFile(`${dirPath}/aggregationByCategries.json`, JSON.stringify(aggregationByCategries), (err)=>{console.log(err);});
	fs.writeFile(`${dirPath}/aggregationByProblemType.json`, JSON.stringify(aggregationByProblemType), (err)=>{console.log(err);});

	
}


async function getTotalProblems(notion, langauges) {

	let has_more_ = true;
	let count = 0;
	let repetition = 0;

	let query = {
		database_id : process.env.notion_coding_practice_database_id,
		filter : {
			or : []
		}
	}
	langauges.forEach((langauge) => {
		query["filter"]["or"].push({
			    "property": langauge,
	    	"checkbox": {
    	  	"equals": true
    		}
		});
	})

	let next_cursor;
	
	while(has_more_){
		let {has_more, next_cursor, results} = await notion.databases.query(query);
		query["start_cursor"] = next_cursor;
		has_more_ = has_more;
		count += results.length;
		repetition += results.reduce((acc, result) => acc+ result["properties"]["Repetition"]["number"], 0);
	}

	return {count, repetition};
}

async function getAggregationByCategories(notion, langauges, secret){

	let has_more_ = true;

	let query = {
		database_id : process.env.notion_coding_pracitce_category_database_id,
	};

	let results_ = [];

	while(has_more_){
		let {has_more, next_cursor, results} = await notion.databases.query(query);
		query["start_cursor"] = next_cursor;
		has_more_ = has_more;
		results_ = results_.concat(results)
	}
	
	let results = [];

	for(let i =0; i<results_.length; i++){
		let result = await refineAggregation(results_[i], langauges, secret);
		results.push(result);
	}

	return results;
}


async function refineAggregation(result, langauges, secret){

	const pageId = result["id"];
	const countID = result["properties"]["Problem_"]["id"];
	const repetitioniId = result["properties"]["Repetition_"]["id"];
	
	const name = result["properties"]["Name"]["title"][0]["plain_text"];
	const count = await getProperty(pageId, countID, secret)
							.then(({data})=> data["formula"]["number"]);
	const repetition = await getProperty(pageId, repetitioniId, secret)
							.then(({data})=> data["formula"]["number"])

	const r = {name, count, repetition}
	for(let i=0; i< langauges.length; i++){
		let langauge = langauges[i];
		let langaugeId = result["properties"][langauge+"_"]["id"];
		r[langauge]  = await getProperty(pageId, langaugeId, secret)
							.then(({data})=> data["formula"]["number"]);

	}


	return r;
}


async function getAggregationByProblemType(notion, langauges){

	let has_more_ = true;

	let query = {
		database_id : process.env.notion_coding_practice_database_id,
	}

	let countByTypes = {};

	while(has_more_){
		let {has_more, next_cursor, results} = await notion.databases.query(query);
		query["start_cursor"] = next_cursor;
		has_more_ = has_more;

		results.forEach((result) => aggregateResult(result, countByTypes, langauges));
	}

	return countByTypes;
}

function aggregateResult(result, countByTypes, langauges){

	const problemTypes = result["properties"]["문제유형"]["multi_select"].map((m)=> m["name"]);

	const resultCounts = {
		count : 1,
		repetition : 0,
	};

	resultCounts.repetition += result["properties"]["Repetition"]["number"]


	langauges.forEach((langauge) => {
		resultCounts[langauge] = 0 + result["properties"][langauge]["checkbox"];
	})

	problemTypes.forEach((type)=> {
		if(!countByTypes[type]) {
			countByTypes[type] = resultCounts;
			return;
		}

		countByTypes[type]["count"] += resultCounts.count;
		countByTypes[type]["repetition"] += resultCounts.repetition;

		langauges.forEach((langauge) => {
			countByTypes[type][langauge] += resultCounts[langauge];
		})

	});
	
}

module.exports = {getCodingPracticeAggregation, getAggregationByCategories}



