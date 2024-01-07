
import * as d3 from "d3";

import {useState, useEffect} from 'react'

import LinePlot from './components/linePlot'
import DonutChart from './components/donutChart'
import PercentageBox from './components/percentageBox'



	
const data = [1,2,3,4,5,6,7,8,9,10]

export default function Programming(){

	return (
		<div>
			<LinePlot data={data} width={400} height={400} margin={{top: 20, right : 20, bottom : 20, left : 20 }} />
			<DonutChart width={400} height={400} data={[1,2,3,4,5]} radius={150} />
			<PercentageBox width={400} height={50}  padding={10} data={[10, 20, 30, 40, 50]}/>
		</div>
		);
}