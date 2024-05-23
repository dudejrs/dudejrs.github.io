import {useEffect, useState} from 'react'
import {getActivitesPerQuarter} from '../../domain/activities'

import {Item, AbbreviateItem, ItemStack} from './item'
import Tick from './tick'
import {RatioSensibleTimeLine} from '../../components/ui'

const ItemMapper = (d, i) => <AbbreviateItem key={i} d={d} i={i}/>

const mapper = [
			undefined,
			(d, i) => <Tick d={d[0]} i={i} />,
			undefined,
			(d, i) => <ItemStack d={d[1]["계획"]} i={i} mapper={ItemMapper} />,
		]

export default function(){
	const [data, setData] = useState([])

	useEffect(()=>{
		getActivitesPerQuarter().then((data)=>{
			setData(data.slice(0,3))	
		})		
	}, [])

	return (
		<div style={{width: '100%'}}>
			<RatioSensibleTimeLine  data={data} mapper={mapper} ratio={0.8} ratios={[0, 0.5, 0, 2]} bmargin={50} stroke={2} radius={4} color={'#aaa'} minSize={[1300, 600]}/>
		</div>
		);
}