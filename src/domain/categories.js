import axios from 'axios';
import {categoriesDir} from './index';

export function getCategory(category) {
    return axios
        .get(`${categoriesDir}/${category}.json`)
        .then(({data}) => {
            return data['카테고리'];
        })
        .catch(error => {
            console.log(error);
            return Promise.resolve([]);
        });
}

export function gatCategories(categories) {
    return Promise.all(categories.flatMap(category => getCategory(category)));
}
