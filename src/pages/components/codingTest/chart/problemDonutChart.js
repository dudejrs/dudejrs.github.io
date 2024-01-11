import {useState, useEffect} from 'react'

import {getTotalCountByProgrammingLanguages} from '../../../../domain/codingPractice'

import {DonutChart} from '../../../../components/chart';
import Legend from './legend'

import styles from './problemDonutChart.module.css'


function genterateItems(item){
	return ( 
		<div className={`${styles.itemContainer}`}>
			<span className={`${styles.itemLanguage}`}>{item["language"]}</span>
			<span className= {`${styles.itemCount}`}>{item["count"]}</span>
		</div>
		)
}


export default function ({programmingLanguages, colors}) {
	
	const [data, setData] = useState([])
	const [items, setItems]  = useState([])

	if(!colors){
		colors = ["#d2d2d2","#b3d8e7","#80bed7","#4da4c7"];
	}

	useEffect(()=>{
		getTotalCountByProgrammingLanguages(programmingLanguages)
			.then(t => {
				setData(t.map(lang => lang["count"]))
				setItems(t.map(lang =>  genterateItems(lang)))
			})
	},[])

	return (
		<div className={`${styles.container}`}>
			<DonutChart width={150} height={150} data={data} radius={50} colors={colors}/>
			<div className={`${styles.subcontainer}`}>
				<h4 className={`${styles.title }`}> 풀은 문제의 수</h4>
				<Legend items={items} colors={colors} className={styles.legend} rem={0.4} />
			</div>
		</div>
		);
}