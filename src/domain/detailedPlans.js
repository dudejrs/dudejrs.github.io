import axios from 'axios';
import {detailedPlanDir} from './index';
import {filterData} from './util'


async function getDetailedPlansFromIds(ids, fields){
	const result = [] 
	
	for(let i=0; i<ids.length ; i++){
		let plan = await getDetailedPlan(ids[i], fields);
		result.push(plan);
	}

	return result;
}


export async function getDetailedPlan(id,fields){
	return await axios.get(`${detailedPlanDir}/${id}.json`)
		.then(({data})=>{
			return filterData(data, fields);
		})
		.catch((error)=>{
			console.log(error);
			return "";
		});
}

export function getDetailedPlans(ids, fields){
	if(!ids) return undefined;
	
	return getDetailedPlansFromIds(ids,fields);

}