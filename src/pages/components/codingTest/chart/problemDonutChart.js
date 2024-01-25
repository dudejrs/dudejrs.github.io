import {useState, useEffect} from 'react'

import {getTotalCountByProgrammingLanguages} from '../../../../domain/codingPractice'

import Legend from './legend'

import styles from './legendItem.module.css'
import DonutChart from './donutChart'


function genterateItems(item){
	return ( 
		<div className={`${styles.itemContainer}`}>
			<span className={`${styles.itemLanguage}`}>{item["language"]}</span>
			<span className= {`${styles.itemCount}`}>{item["count"]}</span>
		</div>
		)
}


export default function ({width, height, layout, programmingLanguages, colors, className}) {
	
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
		<DonutChart layout={layout} title={<>프로그래밍 언어 별<br/> 풀은 문제의 수</>} data= {data} items= {items} programmingLanguages={programmingLanguages} colors={colors} className={className} />
		);
}