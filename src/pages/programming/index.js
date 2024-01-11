
import * as d3 from "d3";

import {useState, useEffect} from 'react'

import {Tooltip} from '../../components'
import {DonutChart, LinePlot, PercentageBox} from '../../components/chart'
import {ProblemDonutChart} from '../components/codingTest/chart'

	
export default function Programming(){

	return (
		<div>
			<ProblemDonutChart programmingLanguages={['C++', 'Java', 'Javascript', 'Python']}/>
			<PercentageBox width={210} height={30}  padding={7.5} data={[10, 20, 30, 40, 50]}/>
		</div>
		);
}