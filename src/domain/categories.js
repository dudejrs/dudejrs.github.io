import axios from 'axios';
import {categoriesDir} from './index'
import {filterData} from './util';


export function getCategories(category){
	return axios.get(`${categoriesDir}/${category}.json`)
			.then(({data})=>{
				return data["카테고리"]
			})
			.catch((error)=>{
				console.log(error);
				return Promise.resolve([])
			});
}
