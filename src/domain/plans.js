import axios from 'axios';
import {planDir, plansDir, categoriesDir} from './index'
import {filterData} from './util';

function getIdsFromCategroy(category){
	return axios.get(`${planDir}/categories.json`)
			.then(({data})=>{
				return data[category];
			});
}

export async function getPlan(id, fields){

	return await axios.get(`${plansDir}/${id}.json`)
					.then(({data})=>{
						return data
					})
					.catch((error)=>{ 
						console.log(error);
						return undefined 
					});
}

export async function getPlansUpdatedDate(){
	return await axios.get(`${plansDir}/meta.json`)
					.then(({data})=>{return data['updated']});
	;
}

export function getCounts(categories) {
	return axios.get(`${categoriesDir}/count.json`)
		.then(({data}) => {
				return new Map(Object.entries(data))
			})
}