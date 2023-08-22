const {getProperty} = require('./index.js'); 
const fs = require('fs');

async function getCodingPracticeAggregation(notion, langauges, dirPath){
	let totalProblem = await getTotalProblems(notion, langauges);
	let aggregationByCategries = await getAggregationByCategories(notion, langauges);
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

async function getAggregationByCategories(notion, langauges){

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

	results_= results_.map((result)=> refineAggregation(result, langauges));

	return results_;
}


function refineAggregation(result, langauges){


	const name = result["properties"]["Name"]["title"][0]["plain_text"]
	const count = result["properties"]["count"]["formula"]["number"]
	const repetition = result["properties"]["Repetition"]["rollup"]["number"]

	const r = {name, count, repetition}

	langauges.forEach((langauge) => r[langauge] = result["properties"][langauge]["rollup"]["number"]);

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

module.exports = {getCodingPracticeAggregation}