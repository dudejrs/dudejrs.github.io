import axios from 'axios';
import {detailedPlanDir} from './index';


export async function getDetailedPlan(id){
	return await axios.get(`${detailedPlanDir}/${id}.json`)
		.then(({data})=>{
			return data;
		});
}

