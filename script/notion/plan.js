const {getProperty} = require('./index.js')
const fs = require('fs');

async function getPlans(notion,tags,dirPath,secret){

 	const filter = {
			or : []
	};

	tags.forEach((tag)=>{
		filter["or"].push({
			property : "Tag",
			multi_select : {
				contains : tag
			}
		})
	});


	const {results} = await notion.databases.query({
		database_id : process.env.notion_database_id,	
		filter : filter
	});

	
	categories = {}
	let detailedPlanList = [];

	results.forEach(async(result)=>{
		const list = await refinePlan(result, categories, secret);
		saveResult(result, dirPath);
	});


	saveCategories(categories, dirPath);
}


async function refinePlan(result, categories, secret){

		result["properties"]["Tag"]["multi_select"].forEach((tag)=>{
			const tag_name = tag["name"];

			if( !categories[tag_name] ) categories[tag_name] = [];
			categories[tag_name].push(result["id"]);
		})


		// "완료율"" "단위계획 수"
		result["properties"]["완료율"] = await getProperty(result["id"], result["properties"]["완료율"]["id"], secret).then(({data})=>{
			return data["results"]
		});;
		
		// result["properties"]["단위계획 수"] = await getProperty(result["id"], result["properties"]["단위계획 수"]["id"], secret);

		result["properties"]["단위계획"] = await getProperty(result["id"], result["properties"]["단위계획"]["id"], secret).then(({data})=>{
			return data["results"];
		});

		return result["properties"]["단위계획"].map((item)=> item["relation"]["id"]);
}


function saveResult(result, dirPath){
	const file_path= `${dirPath}/${result.id}.json`;
	fs.writeFile(file_path, JSON.stringify(result), (err)=>{console.log(err)});
}

function saveCategories(result, dirPath){
	const file_path = `${dirPath}/categories.json`;
	fs.writeFile(file_path, JSON.stringify(result), (err)=> { console.log(err)});
}

function saveDetailPlans(detailedPlanList, dirPath){	
	const uniqueDetailedPlanList = detailedPlanList.filter((p,i) => {return detailedPlanList.indexOf(p) == i;});
	const file_path = `${dirPath}/detailedPlans.json`
	fs.writeFile(file_path, JSON.stringify(uniqueDetailedPlanList), (err)=>{console.log(err)});

}


module.exports = {getPlans}

