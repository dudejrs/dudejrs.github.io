
import * as d3 from "d3";

import {useState, useEffect} from 'react'

import {Tooltip} from '../../components'
import {DonutChart, LinePlot, PercentageBox} from '../../components/chart'

	
export default function Programming(){

	return (
		<div>
			<LinePlot data={[1,2,3,4,5,6,7,8,9,10]} width={150} height={150} margin={{top: 20, right : 20, bottom : 20, left : 20 }} />
			<DonutChart width={150} height={150} data={[1,2,3,4,5]} radius={50} />
			<PercentageBox width={210} height={30}  padding={7.5} data={[10, 20, 30, 40, 50]}/>
			<Tooltip />
		</div>
		);
}