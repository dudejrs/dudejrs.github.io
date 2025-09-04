import React from 'react';
import {useState, useEffect} from 'react';

import {getAggregationByProgrammingLanguages} from '../../../../domain/codingPractice';

import SpiderChart from './spiderChart';

import styles from './legendItem.module.css';

function refineData(data) {
    if (!data) return {};
    const {language, ...left} = data;
    return left;
}

function toCategories(data, categories) {
    if (!data) return [];

    let ret = [];
    let filtered = categories.filter(category => data.hasOwnProperty(category));

    for (let category of filtered) {
        if (data[category] > 0)
            ret.push({category: category, count: data[category]});
    }

    return ret;
}

function genterateItems(data) {
    return (
        <div className={`${styles.itemContainer} ${styles.Compact}`}>
            <span className={`${styles.itemLanguage}`}>{data['category']}</span>
            <span className={`${styles.itemCount}`}>{data['count']}</span>
        </div>
    );
}

export default function LanguageSpiderChart ({language, categories, className}) {
    const [data, setData] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAggregationByProgrammingLanguages([language]).then(d => {
            setData(refineData(d[0]));
            setItems(
                toCategories(d[0], categories).map(d => genterateItems(d)),
            );
        });
    }, []);

    return (
        <SpiderChart
            title={
                <>
                    카테고리 별 <br /> 풀은 문제의 수 ({language})
                </>
            }
            data={[data]}
            items={items}
            ticks={[0, 5, 10, 50, 100]}
            ratio={0.5}
            textRatio={0.7}
            className={className}
        />
    );
}
