import axios from 'axios'
import {codingPracticeDir}from './index'


function calculateAggregationByProgrammingLanguagesFrom(data, programmingLanguages){
	const ret = [];
	const map = new Map();

	programmingLanguages.forEach((language)=> { 
		map.set(language, ret.length)
		ret.push({ language : language});
	})

	for (let d of data){
		let name = d['name']
		for (let language of programmingLanguages){
			let i = map.get(language)
			ret[i][name] = d[language]
		}
	}

	return ret
}


function refineAggregationByCategoriesToLagnaugesTotalCount(data, programmingLanguages){
	const ret = [];
	const map = new Map();

	programmingLanguages.forEach((language)=> { 
		map.set(language, ret.length)
		ret.push({ language : language, count : 0});
	})

	for (let d of data){
		let name = d['name']
		for (let language of programmingLanguages){
			let i = map.get(language)
			ret[i]['count'] += d[language]
		}
	}

	return ret
}

function refineTotalCountByProgrammingType(data, fields, types){
	const ret = []

	for(let type of types){
		let d = {'name' : type}
		for(let field of fields){
			d[field] = data[type][field]
		}
		ret.push(d)
	}

	return ret
}

export async function getTotal() {

	return await axios.get(`${codingPracticeDir}/totalProblem.json`)
		.then(({data}) => {
			return data
		})
}

export async function getAggreagationByCategories() {
	return await axios.get(`${codingPracticeDir}/aggregationByCategries.json`)
		.then(({data}) => {
			return data
		})
}
export async function getAggregationByProblem() {
	return await axios.get(`${codingPracticeDir}/aggregationByCategries.json`)
		.then(({data}) => {
			return data
		})	
}

export async function getAggregationByProgrammingLanguages(programmingLanguages){
	return await axios.get(`${codingPracticeDir}/aggregationByCategries.json`)
		.then(({data})=> {
			return calculateAggregationByProgrammingLanguagesFrom(data, programmingLanguages)
		})
}

export async function getTotalCountByProgrammingLanguages(programmingLanguages){
		return await axios.get(`${codingPracticeDir}/aggregationByCategries.json`)
		.then(({data})=> {
			return refineAggregationByCategoriesToLagnaugesTotalCount(data, programmingLanguages)
		})
}

export async function getFieldsByProgrammingType(fields, types){
	return await axios.get(`${codingPracticeDir}/aggregationByProblemType.json`)
			.then(({data})=> {
				return refineTotalCountByProgrammingType(data, fields, types);
			});
}

export async function getProblemTypes(){
	return await axios.get(`${codingPracticeDir}/aggregationByProblemType.json`)
		.then(({data}) => {
			return Object.keys(data)
		});
}

export async function getTest(){
	return '12345';
}
