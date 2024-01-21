import {useState, useEffect} from 'react'

import {Tooltip, Tag, Dropdown, DropdownTagList} from '../../components'
import {DonutChart, LinePlot, PercentageBox, SpiderChart} from '../../components/chart'

	
export default function(){

	return (
		<div>
		<div>
			<h3>ui</h3>
			<Tag name={'tag'} />
			<Tooltip />
			<Dropdown width={'100px'} content={'Hello World!'}>
				Drop down
			</Dropdown>
			<DropdownTagList names={['tag1','tag2','tag3']} tags={['tag1']}/>
		</div>
		<div>
			<h3>chart</h3>
			<LinePlot data={[1,2,3,4,5,6,7,8,9,10]} width={150} height={150} margin={{top: 20, right : 20, bottom : 20, left : 20 }} />
			<DonutChart width={150} height={150} data={[1,2,3,4,5]} radius={50} />
			<PercentageBox width={210} height={30}  padding={7.5} data={[10, 20, 30, 40, 50]}/>
			<SpiderChart width={200} height={200} data={[{a : 1, b : 2, c : 3, d : 4},{a : 2, b : 3, c : 4, d : 1}]}/>
		</div>
		</div>
		);
}