import {useState, useEffect} from 'react';

import {
    getTotal,
    getAggreagationByCategories,
    getAggregationByProblem,
    getAggregationByProgrammingLanguages,
    getTotalCountByProgrammingLanguages,
    getFieldsByProgrammingType,
} from '../../../domain/codingPractice';

import TotalCount from './counts/totalCount';
import AggregationByCategories from './aggregationByCategories';
import SomeCountAndRepetition from './counts/someCountAndRepititon';
import SomeCount from './counts/someCount';

import styles from './index.module.css';

export default function CodingTest() {
    const [total, setTotal] = useState({});
    const [aggregationByCategories, setAggregationByCategories] = useState([]);
    const [aggregationByLanguage, setAggregationByLanguage] = useState([]);
    const [totalCountByLangauges, setTotalCountByLanguages] = useState([]);
    const programmingLanguages = [
        'C++',
        'Java',
        'Javascript',
        'Python',
        'Go',
        'Kotlin',
    ];

    useEffect(() => {
        getTotal().then(t => {
            setTotal(t);
        });

        getAggreagationByCategories().then(t => {
            setAggregationByCategories(t);
        });

        getAggregationByProgrammingLanguages(programmingLanguages).then(t => {
            setAggregationByLanguage(t);
        });

        getTotalCountByProgrammingLanguages(programmingLanguages).then(t => {
            setTotalCountByLanguages(t);
        });

        getFieldsByProgrammingType(
            ['count'],
            ['Greedy', 'BFS', 'DFS', '완전탐색'],
        ).then(t => {
            console.log(t);
        });
    }, []);

    return (
        <div>
            <TotalCount className={styles.countContainer} total={total} />
            <AggregationByCategories
                data={aggregationByCategories}
                programmingLanguages={programmingLanguages}
            />
            {/*<AggreagationBylanguage data={aggregationByCategories} programmingLanguages={programmingLanguages}/>*/}
        </div>
    );
}
