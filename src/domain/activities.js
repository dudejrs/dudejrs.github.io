import axios from 'axios';
import {activitiesDir} from './index'

export async function getActivitesPerQuarter() {
    return await axios.get(`${activitiesDir}/quarter.json`)
        .then(({data}) => {

            return Object.entries(data)
        })
}

export async function getActivitesPerMonth() {
    return await axios.get(`${activitiesDir}/month.json`)
        .then(({data}) => {
            return Object.entries(data)
        })
}