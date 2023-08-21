const {getProperty} = require('./index.js'); 




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
	console.log(count, repetition)
	return {count, repetition}
}

function getTotalAlgorithmProblems(notion){

	return {};
}

function getTotalDesignPatternProblems(notion){
	return {};
}

module.exports = {getTotalProblems}