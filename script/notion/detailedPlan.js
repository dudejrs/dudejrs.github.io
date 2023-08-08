const fs = require('fs');
const {getPage, getProperty} = require('./index');

function filterFile(file, filterList){

	for(const filter of filterList){
		if(file == filter) return false;
	}

	return true;	
}

function fileToPlan(file, planDirPath){
	return JSON.parse(fs.readFileSync(planDirPath+"/"+file));
}

function uniqueList(list){
	return list.filter((item, index) => {return list.indexOf(item) == index;});
}



// const columns = ["Done","날짜","Date","진행상태","세부계획"];
// const types = ["checkbox","rollup","date","select","title"];

async function refineData(data, secret){
	const output = {};

	output["id"] = data["id"];

	Object.keys(data["properties"]).forEach((key) => {
		output[key] = data["properties"][key];
	});

	output["Done"] = data["properties"]["Done"]["checkbox"];
	output["날짜"] = await getProperty(data["id"], data["properties"]["날짜"]["id"],secret)
		.then(({data})=> {return data["results"]["formula"];})
	output["Date"] = data["properties"]["Date"]["date"];
	output["진행상태"] = (data["properties"]["진행상태"]["select"])? data["properties"]["진행상태"]["select"]["name"] : null;
	output["세부계획"] = data["properties"]["세부계획"]["title"][0]["plain_text"];

	return output;
}

async function getDetailedPlan(id, secret){
	return await getPage(id, secret)
		.then(({data})=>refineData(data, secret));
}

function getDetailedPlansFromPlans(planDirPath, detailedPlanDirPath, filterList, secret){


	let list = [];
	const files = fs.readdirSync(planDirPath).filter(file=>{return filterFile(file,filterList)});

	for (const file of files){
		const plan = fileToPlan(file,planDirPath);
		if(plan['단위계획']) list.push(...plan['단위계획']);
	}

	let idList = uniqueList(list);

	idList.forEach(async(id)=>{
		try {
			let detailedPlan = await getDetailedPlan(id, secret); 
			saveDetailedPlan(id, detailedPlan, detailedPlanDirPath);
		}catch(err){
			console.log(err);
		}
	});

}

function saveDetailedPlan(id, detailedPlan, detailedPlanDirPath){
	const filePath = `${detailedPlanDirPath}/${id}.json`;
	fs.writeFile(filePath, JSON.stringify(detailedPlan), (err)=>{console.log(err);});
}


module.exports = {getDetailedPlansFromPlans}