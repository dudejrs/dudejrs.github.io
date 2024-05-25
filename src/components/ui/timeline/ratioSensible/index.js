import {useEffect, useState, useContext} from 'react'

import VerticalTimeline from '../vertical'
import HorizontalTimeline from '../horizontal'

import {Context as CurrentNodeSizeContext} from '../../sensible/context/currentNodeSize'
import {Context as LayoutContext} from '../../sensible/context/layout'
import {Context as IsVerticalContext} from './context'

import {CurrentNodeSizeSensible, LayoutSensible} from '../../sensible'

function flip(ratios) {
	const ret = []

	while(ratios.length !== 0) {
		ret.push(ratios.pop())
	}

	return ret
}

function calculateWidth(width) {
	return Math.min(width, document.body.clientWidth * 0.8)
}

function calculate() {
	const map = new Map()

	return (size, layout, minSize) => {
		const large = Math.max(...minSize)
		const small = Math.min(...minSize)

		if (!map.has(layout)) {
			if (layout === "portrait") {
				map.set(layout, [small, large])
			} else {
				map.set(layout, [large, small])
			}
		} 
		return map.get(layout)
	}
}

const calculateSize = calculate()

export function RatioSensibleTimeline({ratio = 1.5, ratios=[1,1,1,1], mapper, minSize=[0, 0], ...props}) {
	const {size, setSize, partiallyCovered} = useContext(CurrentNodeSizeContext)
	const layout = useContext(LayoutContext)
	const [width, height] = calculateSize(size, layout, minSize)

	useEffect(()=>{
		setSize(minSize)
	}, [])

	if (layout === "portrait" && (window.innerWidth / window.innerHeight < ratio)){
		return (
			<IsVerticalContext.Provider value={true} >
				<VerticalTimeline width={calculateWidth(width)} height={height} ratios={ratios} mapper={mapper} {...props} />
			</IsVerticalContext.Provider>
			)
	}

	return (
		<IsVerticalContext.Provider value={false} >
			<HorizontalTimeline width={minSize[0]} height={minSize[1]} ratios={flip([...ratios])} mapper={flip([...mapper])} {...props} />
		</IsVerticalContext.Provider>)
}

export default function({style, ...props}) {
	return (
			<LayoutSensible ratio={2} style={style}>
				<RatioSensibleTimeline {...props}/>
			</LayoutSensible>) 
}

