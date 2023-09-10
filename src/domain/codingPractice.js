import axios from 'axios'
import {codingPracticeDir}from './index'

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

export async function getTest(){
	return '12345';
}

export default {getTest, getTotal}