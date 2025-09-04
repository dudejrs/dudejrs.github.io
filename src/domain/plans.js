import axios from 'axios';
import {plansDir, categoriesDir} from './index';

export async function getPlan(id) {
    return await axios
        .get(`${plansDir}/${id}.json`)
        .then(({data}) => {
            return data;
        })
        .catch(error => {
            console.log(error);
            return undefined;
        });
}

export async function getPlansUpdatedDate() {
    return await axios.get(`${plansDir}/meta.json`).then(({data}) => {
        return data['updated'];
    });
}

export function getCounts() {
    return axios.get(`${categoriesDir}/count.json`).then(({data}) => {
        return new Map(Object.entries(data));
    });
}
