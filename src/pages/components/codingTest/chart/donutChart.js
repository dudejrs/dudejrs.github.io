import {useState, useEffect} from 'react'

import {getTotalCountByProgrammingLanguages} from '../../../../domain/codingPractice'

import {DonutChart} from '../../../../components/chart';
import Legend from './legend'
import Box from './box'

import styles from './donutChart.module.css'


export default function ({width, height, radius, data, items, title, rem=0.4, programmingLanguages, colors, key}) {
	
	if(!colors){
		colors = ["#d2d2d2","#b3d8e7","#80bed7","#4da4c7"];
	}

	return (
		<Box className={`${styles.container}`} key={key}>
			<DonutChart width={150} height={150} data={data} radius={50} colors={colors}/>
			<div className={`${styles.subcontainer}`}>
				<h4 className={`${styles.title }`}> {title} </h4>
				<Legend items={items} colors={colors} className={styles.legend} rem={0.4} />
			</div>
		</Box>
		);
}