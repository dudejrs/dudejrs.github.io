import axios from 'axios';
import {codingPracticeDir} from './index';

function calculateAggregationByProgrammingLanguagesFrom(
    data,
    programmingLanguages,
) {
    const ret = [];
    const map = new Map();

    programmingLanguages.forEach(language => {
        map.set(language, ret.length);
        ret.push({language: language});
    });

    for (let d of data) {
        let name = d['name'];
        for (let language of programmingLanguages) {
            let i = map.get(language);
            ret[i][name] = d[language];
        }
    }

    return ret;
}

function refineAggregationByCategoriesToLagnaugesTotalCount(
    data,
    programmingLanguages,
) {
    const ret = [];
    const map = new Map();

    programmingLanguages.forEach(language => {
        map.set(language, ret.length);
        ret.push({language: language, count: 0});
    });

    for (let d of data) {
        let name = d['name'];
        for (let language of programmingLanguages) {
            let i = map.get(language);
            ret[i]['count'] += d[language];
        }
    }

    return ret;
}

function refineTotalCountByProgrammingType(data, fields, types) {
    const ret = [];

    for (let type of types) {
        let d = {name: type};
        for (let field of fields) {
            d[field] = data[type][field];
        }
        ret.push(d);
    }

    return ret;
}

function refineLog(data, date, nDays) {
    let ret = [];
    let to;

    if (!(date instanceof Date)) {
        to = new Date(date);
    } else {
        to = date;
    }

    let from = new Date(to);
    from.setTime(from.getTime() - nDays * 24 * 60 * 60 * 1000);
    to.setTime(to.getTime() + 24 * 60 * 60 * 1000);

    let oldest = new Date(from);
    let lastest = new Date(from);

    for (let key of Object.keys(data)) {
        let time = new Date(key).getTime();

        if (time <= from.getTime() && time < oldest.getTime()) {
            oldest = new Date(key);
        }

        if (time < to.getTime() && lastest.getTime() < time) {
            lastest = new Date(key);
        }

        if (from.getTime() <= time && time <= to.getTime()) {
            ret.push({date: key, ...data[key]});
        }
    }

    if (oldest.getTime() < from.getTime()) {
        oldest = oldest.toISOString().slice(0, 10);
        ret.push({date: from.toISOString().slice(0, 10), ...data[oldest]});
    }

    if (lastest.getTime() < to.getTime()) {
        lastest = lastest.toISOString().slice(0, 10);
        ret.push({date: to.toISOString().slice(0, 10), ...data[lastest]});
    }

    ret.sort((d1, d2) => {
        if (d1.date < d2.date) {
            return -1;
        }
        return d1.date > d2.date ? 1 : 0;
    });

    return ret;
}

export async function getTotal() {
    return await axios
        .get(`${codingPracticeDir}/totalProblem.json`)
        .then(({data}) => {
            return data;
        });
}

export async function getAggreagationByCategories() {
    return await axios
        .get(`${codingPracticeDir}/aggregationByCategories.json`)
        .then(({data}) => {
            return data;
        });
}
export async function getAggregationByProblem() {
    return await axios
        .get(`${codingPracticeDir}/aggregationByCategories.json`)
        .then(({data}) => {
            return data;
        });
}

export async function getAggregationByProgrammingLanguages(
    programmingLanguages,
) {
    return await axios
        .get(`${codingPracticeDir}/aggregationByCategories.json`)
        .then(({data}) => {
            return calculateAggregationByProgrammingLanguagesFrom(
                data,
                programmingLanguages,
            );
        });
}

export async function getTotalCountByProgrammingLanguages(
    programmingLanguages,
) {
    return await axios
        .get(`${codingPracticeDir}/aggregationByCategories.json`)
        .then(({data}) => {
            return refineAggregationByCategoriesToLagnaugesTotalCount(
                data,
                programmingLanguages,
            );
        });
}

export async function getFieldsByProgrammingType(fields, types) {
    return await axios
        .get(`${codingPracticeDir}/aggregationByProblemType.json`)
        .then(({data}) => {
            return refineTotalCountByProgrammingType(data, fields, types);
        });
}

export async function getProblemTypes() {
    return await axios
        .get(`${codingPracticeDir}/aggregationByProblemType.json`)
        .then(({data}) => {
            return Object.keys(data);
        });
}

export async function getLog(date, nDays) {
    return await axios.get(`${codingPracticeDir}/log.json`).then(({data}) => {
        return refineLog(data, date, nDays);
    });
}

export async function getPracticeUpdateTime() {
    return await axios.get(`${codingPracticeDir}/meta.json`).then(({data}) => {
        return data['updated'];
    });
}

export async function getTest() {
    return '12345';
}
