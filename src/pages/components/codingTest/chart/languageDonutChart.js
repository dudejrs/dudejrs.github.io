import {useState, useEffect} from 'react'

import {getAggregationByProgrammingLanguages} from '../../../../domain/codingPractice'

import DonutChart from './donutChart'

import styles from './legendItem.module.css'


function genterateItems(data){
	return ( 
		<div className={`${styles.itemContainer}`}>
			<span className={`${styles.itemLanguage}`}>{data["category"]}</span>
			<span className= {`${styles.itemCount}`}>{data["count"]}</span>
		</div>
		)
}

function refineData(data, categories){
	if(!data) return []
	
	let ret = []
	let filtered = categories.filter(category => data.hasOwnProperty(category))

	for (let category of filtered) {
		if(data[category] > 0)
			ret.push({category : category, count : data[category]})		
	}

	return ret
}


export default function ({width, height, language, categories, colors, layout='portrait', className}) {
	
	const [data, setData] = useState([])
	const [items, setItems]  = useState([])

	if(!colors){
		colors = ["#d2d2d2","#b3d8e7","#80bed7","#4da4c7"];
	}

	useEffect(()=>{
		getAggregationByProgrammingLanguages([language])
			.then(t => {
				if(t.length == 0) return;
				let data = refineData(t[0],categories)
				setData(data.map(d => d['count']))
				setItems(data.map(d => genterateItems(d)))
			})
	},[language])

	return (
		<DonutChart title={<>카테고리 별 <br/> 풀은 문제의 수 ({language})</>} 
					width={width} height={height}
					data= {data} items= {items} 
					programmingLanguages={[]} 
					colors={colors} 
					layout={layout}
					className={className}
					/>
		);
}