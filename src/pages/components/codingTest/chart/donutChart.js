import {useState, useEffect} from 'react'

import {getTotalCountByProgrammingLanguages} from '../../../../domain/codingPractice'

import {DonutChart} from '../../../../components/chart';
import Legend from './legend'
import Box from './box'

import styles from './donutChart.module.css'



function layoutChart(type, title, donut, legend){

	if(type == 'landscape'){
		return (
			<>
			{title}
			{donut}
			{legend}
			</>
			)
	}

	return (
			<>
			{donut}
			<div className={`${styles.subcontainer}`}>
				{title}
				{legend}
			</div>
			</>
		)
}


function getLayout(layout){
	if(layout == 'landscape')
		return styles.landscape
	return ''
}

export default function ({width, height, radius, data, items, title, rem=0.4, programmingLanguages, colors, key, layout = 'portrait'}) {
	
	if(!colors){
		colors = ["#d2d2d2","#b3d8e7","#80bed7","#4da4c7"];
	}

	return (
		<Box className={`${styles.container} ${getLayout(layout)}`} width={width} height={height+'px'} key={key}>
		{
			layoutChart(layout,(<h4 className={`${styles.title }`}> {title} </h4>)
				,(<DonutChart width={140} height={140} data={data} radius={70} colors={colors} ratio={0.67}/>) 
				,(<Legend items={items} colors={colors} className={styles.legend} rem={0.4} />))
		}
		</Box>
		);
}