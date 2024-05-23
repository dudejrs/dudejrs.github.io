import axios from 'axios';
import {projectDir, practiceDir} from "./index"


export async function fetchProjects() {
	return axios.get(`${projectDir}/project.json`)
		.then(({data}) => data)
}

export async function fetchPractice() {
	return axios.get(`${practiceDir}/practice.json`)
		.then(({data}) => data)
}

export async function fetchExperience() {
	const projects = await fetchProjects()
	const practices = await fetchPractice()

	return projects.concat(practices)
}