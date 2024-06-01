import {useState, useEffect} from 'react'

import {getTotalCountByProgrammingLanguages} from '../../../../domain/codingPractice'

import {DonutChart} from '../../../../components/chart';
import Legend from './legend'
import Box from './box'

import Color from '../../../../components/color'

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

export default function ({width, height,legendHeight, radius = 70, data, items, title, rem=0.4, programmingLanguages, colors, key, layout = 'portrait', className}) {
	
	if(!colors){
		if (data){
			colors = Color.diverseLight(data.length)
		}
	}


	return (
		<Box className={`${styles.container} ${getLayout(layout)} ${className}`} width={width} height={height+'px'} key={key}>
		{
			layoutChart(layout,(<h4 className={`${styles.title }`}> {title} </h4>)
				,(<DonutChart width={radius * 2} height={radius * 2} data={data} radius={radius} colors={colors} ratio={0.67}/>) 
				,(<Legend items={items} height={legendHeight} colors={colors} className={styles.legend} rem={rem} />))
		}
		</Box>
		);
}