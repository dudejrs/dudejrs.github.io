import axios from 'axios';
import {planDir, plansDir, categoriesDir} from './index'
import {filterData} from './util';

function getIdsFromCategroy(category){
	return axios.get(`${planDir}/categories.json`)
			.then(({data})=>{
				return data[category];
			});
}

async function getPlan(id, fields){

	return await axios.get(`${plansDir}/${id}.json`)
					.then(({data})=>{
						return filterData(data, fields);
					})
					.catch((error)=>{ 
						console.log(error);
						return undefined 
					});
}

async function getPlansFromIds(ids, fields){
	const result = [] 
	
	for(let i=0; i<ids.length ; i++){
		let plan = await getPlan(ids[i], fields);
		result.push(plan);
	}

	return result;
}

export async function getDetailedPlanList(id){
	return  await getPlan(id, ['단위계획'])
}

export function getCounts(categories) {
	return axios.get(`${categoriesDir}/count.json`)
		.then(({data}) => {
				return new Map(Object.entries(data))
			})
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

export async function getPlansUpdatedDate(){
	return await axios.get(`${plansDir}/meta.json`)
					.then(({data})=>{return data['updated']});
	;
}
