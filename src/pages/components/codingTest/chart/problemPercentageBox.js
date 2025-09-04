import React from "react";
import {useState, useEffect} from 'react';

import {getTotalCountByProgrammingLanguages} from '../../../../domain/codingPractice';

import PercentageBox from './percentageBox';

import styles from './legendItem.module.css';

function genterateItems(item) {
    return (
        <div className={`${styles.itemContainer}`}>
            <span className={`${styles.itemLanguage}`}>{item['language']}</span>
            <span className={`${styles.itemCount}`}>{item['count']}</span>
        </div>
    );
}

export default function ProblemPercentageBox({programmingLanguages, className}) {
    const [data, setData] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getTotalCountByProgrammingLanguages(programmingLanguages).then(t => {
            setData(t.map(lang => lang['count']));
            setItems(t.map(lang => genterateItems(lang)));
        });
    }, []);

    return (
        <PercentageBox
            title={
                <>
                    프로그래밍 언어 별<br/> 풀은 문제의 수
                </>
            }
            data={data}
            items={items}
            className={className}
        />
    );
}
