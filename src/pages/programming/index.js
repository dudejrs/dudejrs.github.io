
import * as d3 from "d3";

import {useState, useEffect} from 'react'

import {Tooltip} from '../../components'
import {DonutChart, LinePlot, PercentageBox} from '../../components/chart'

	
export default function Programming(){

	return (
		<div>
			<LinePlot data={[1,2,3,4,5,6,7,8,9,10]} width={400} height={400} margin={{top: 20, right : 20, bottom : 20, left : 20 }} />
			<DonutChart width={400} height={400} data={[1,2,3,4,5]} radius={150} />
			<PercentageBox width={400} height={50}  padding={10} data={[10, 20, 30, 40, 50]}/>
			<div style={{width : '1280px', display : 'flex', justifyContent: 'center'}}>
				<Tooltip />
			</div>
		</div>
		);
}