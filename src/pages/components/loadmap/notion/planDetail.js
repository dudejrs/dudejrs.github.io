import React from 'react';
import {useState, useEffect} from 'react';

import {getPlan} from '../../../../domain/plans';
import Detail from '../../../../notion/detail';
import DetailedPlanTable from './detailedPlanTable';

import styles from './planDetail.module.css';

const types = {
    title: 'title',
    "기간": 'date',
    Tag: 'multiselect',
    "분류" : 'select',
    "완료율": 'rollup',
    Status: 'status',
};

export default function PlanDetail({target, children}) {
    const [plan, setPlan] = useState({});
    const [detailedPlan, setDetailedPlan] = useState([]);

    useEffect(() => {
        getPlan(target).then(plan => {
            const {id, 세부계획, ...p} = plan;
            setDetailedPlan(plan['세부계획']);
            setPlan(p);
        });
    }, []);

    return (
        <>
            {Object.keys(plan) && (
                <Detail className={styles.container} data={plan} types={types}>
                    <DetailedPlanTable detailedPlan={detailedPlan} />
                </Detail>
            )}
            {children}
        </>
    );
}
