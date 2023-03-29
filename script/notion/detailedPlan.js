const fs = require('fs');
const {getPage} = require('./index');

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


async function getDetailedPlan(id, secret){
	let {data} = await getPage(id, secret);
	return data;
}

function getDetailedPlansFromPlans(planDirPath, detailedPlanDirPath, filterList, secret){


	let list = [];
	const files = fs.readdirSync(planDirPath).filter(file=>{return filterFile(file,filterList)});

	for (const file of files){
		const plan = fileToPlan(file,planDirPath);
		if(plan['properties']['단위계획']) list.push(...plan['properties']['단위계획']);
	}

	let idList = uniqueList(list.map(item => item['relation']['id']));

	idList.forEach(async(id)=>{
		let detailedPlan = await getDetailedPlan(id, secret); 
		console.log(detailedPlan);
		saveDetailedPlan(id, detailedPlan, detailedPlanDirPath);
	});

}

function saveDetailedPlan(id, detailedPlan, detailedPlanDirPath){
	const filePath = `${detailedPlanDirPath}/${id}.json`;
	fs.writeFile(filePath, JSON.stringify(detailedPlan), (err)=>{console.log(err);});
}


module.exports = {getDetailedPlansFromPlans}