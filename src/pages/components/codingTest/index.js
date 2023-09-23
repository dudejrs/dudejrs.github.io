
import {useState, useEffect} from 'react'

import { getTotal, 
getAggreagationByCategories, 
getAggregationByProblem } from '../../../domain/codingPractice'

import TotalCount from './counts/totalCount';
import AggregationByCategories from './aggregationByCategories'
import SomeCountAndRepetition from './counts/someCountAndRepititon'
import SomeCount from './counts/someCount'

import styles from './index.module.css'

export default function CodingTest(){


	const [total, setTotal] = useState({});
	const [aggregationByCategories, setAggregationByCategories] = useState([])
	const programmingLanguages = ['C++', 'Java', 'Javascript', 'Python']


	useEffect(()=>{
		getTotal().then((t)=>{
			setTotal(t);
		})

		getAggreagationByCategories().then((t)=>{
			setAggregationByCategories(t)
		})
	}, []);


	return (
		<div>
			<TotalCount className={styles.countContainer} total = {total} />
			<AggregationByCategories data= {aggregationByCategories} programmingLanguages={programmingLanguages} />			
		</div>
		);
}