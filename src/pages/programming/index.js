
import * as d3 from "d3";

import {useState, useEffect} from 'react'

import {Tooltip} from '../../components'
import {DonutChart, LinePlot, PercentageBox} from '../../components/chart'
import {ProblemDonutChart, LangaugeDonutChart} from '../components/codingTest/chart'
	
export default function(){

	const programmingLanguages = ['C++', 'Java', 'Javascript', 'Python']
	const categories = ['디자인패턴', '리팩토링', '알고리즘', '코딩테스트']

	return (
		<div>
			<ProblemDonutChart programmingLanguages={programmingLanguages}/>
			{
				programmingLanguages.map( lang => 
					(<LangaugeDonutChart language={lang} categories={categories}/>)
					)
			}
			<PercentageBox width={210} height={30}  padding={7.5} data={[10, 20, 30, 40, 50]}/>
		</div>
		);
}