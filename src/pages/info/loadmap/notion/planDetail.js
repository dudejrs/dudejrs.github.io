
import {useState, useEffect} from 'react';

import {getPlanById} from '../../../../domain/plans';
import Detail from '../../../../notion/detail'

import styles from './planDetail.module.css'


const types = {
	"title" : "title",
	"Tag" : "multiselect",
	"남은 시간" : "rollup",
	"완료" : "checkbox",
	"완료율" : "rollup",
	"장기/단기" : "multiselect"
};

export default function PlanDetail({target, children}){
	
	const[plan, setPlan] = useState({});

	useEffect(()=>{

		getPlanById(target, Object.keys(types))
			.then((plan)=> {
				setPlan(plan);
				console.log(plan);
			})

	},[]);


	const isContainFilter = (key ,filterList) => {
		return !filterList.some((f)=>(key == f));
	}
	return (

		Object.keys(plan) && (
			<Detail className={styles.container} data={plan} filterList={["id"]} types={types}>
			</Detail>
			)

	);
}