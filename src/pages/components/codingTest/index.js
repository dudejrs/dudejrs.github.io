
import {useState, useEffect} from 'react'

import { getTotal, 
getAggreagationByCategories, 
getAggregationByProblem } from '../../../domain/codingPractice'

import styles from './index.module.css'

export default function CodingTest(){


	const [total, setTotal] = useState('135');
	
	useEffect(()=>{
		getTotal().then((t)=>{
			setTotal(t);
		})

		getAggreagationByCategories().then((t)=>{
			console.log(t)
		})
	}, []);


	return (
		<div className={`${styles.totalContainer} `}>
			<div
				className ={styles.totalContainerItem}> <b> 총 푼 문제수 : </b> <span> {total.count} </span> </div>
			<div className={styles.totalContainerItem}> <b> 총 반복수 : </b> <span> {total.repetition}</span> </div>
		</div>
		);
}