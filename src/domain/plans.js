import axios from 'axios';
import {planDir} from './index.js'

function getIdsFromCategroy(category){
	return axios.get(`${planDir}/categories.json`)
			.then(({data})=>{
				return data[category];
			});
}

async function getPlan(id, fields){
	return  await axios.get(`${planDir}/${id}.json`)
					.then(({data})=>{
						return filterData(data, fields);
					})
					.catch((error)=>{ 
						console.log(error);
						return undefined 
					});
}

function filterData(data, fields){

	if(!fields){
		return data;
	}
	
	const output = {};
	
	output["id"] = data["id"];

	fields.forEach((field)=>{
		if(field == "단위계획 수") return; /* 추후 수정 */
		if(data[field]) output[field] = data[field];
	});

	return output;
}

async function getPlansFromIds(ids, fields){
	const result = [] 
	
	for(let i=0; i<ids.length ; i++){
		let plan = await getPlan(ids[i], fields);
		result.push(plan);
	}

	return result;
}


export function getDetailedPlanList(id){
	return axios.get(`${planDir}/${id}.json`).then
}

export function getPlans(category, fields){
	return getIdsFromCategroy(category)
			.then((ids)=>{
				return  getPlansFromIds(ids, fields);
			})
			.catch((error)=>{
				console.log(error);
				return Promise.resolve([])
			});
}

export function getPlanById(id, fields){
	return getPlan(id, fields);
}


