import {useEffect, useContext} from 'react'

import VerticalTimeline from './vertical'
import HorizontalTimeline from './horizontal'

import {Context} from '../sensible/context/currentNodeSize'

import {CurrentNodeSizeSensible} from '../sensible'

function flip(ratios) {
	const ret = []

	while(ratios.length !== 0) {
		ret.push(ratios.pop())
	}

	return ret
}

export function RatioSensibleTimeline({data, mapper, ratio = 1.5, ratios=[1,1,1,1] }) {
	const [width, height, partiallyCovered] = useContext(Context)
	
	if (!width || !height ) {
		return (<></>)
	}

	if (width / height < ratio || partiallyCovered){
		return (<VerticalTimeline width={width} height={height} data={data} mapper={mapper} ratios={ratios} />)
	}

	return (<HorizontalTimeline width={width} height={height} data={data} mapper={mapper} ratios={flip([...ratios])} />)
}

export default function({data, width, height, mapper, style, ratios, color}) {
	return (
			<CurrentNodeSizeSensible style={style}>
				<RatioSensibleTimeline data={data} width={width} height={height} mapper={mapper} ratios={ratios} color={color}/>
			</CurrentNodeSizeSensible>) 
}

