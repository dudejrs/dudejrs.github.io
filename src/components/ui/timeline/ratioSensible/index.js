import {useEffect, useState, useContext} from 'react'

import VerticalTimeline from '../vertical'
import HorizontalTimeline from '../horizontal'

import {Context as CurrentNodeSizeContext} from '../../sensible/context/currentNodeSize'
import {Context as IsVerticalContext} from './context'

import {CurrentNodeSizeSensible} from '../../sensible'

function flip(ratios) {
	const ret = []

	while(ratios.length !== 0) {
		ret.push(ratios.pop())
	}

	return ret
}

function apply(flag, size, minSize) {
	let [width, height] = size

	if (flag) {
		height = Math.max(height, Math.max(...minSize))
		width = Math.min(width, Math.min(...minSize))
	} else {
		width = Math.max(width, Math.max(...minSize))
		height = height === 0 ?  Math.min(...minSize) : Math.min(height, Math.min(...minSize))
	}

	return [width, height]
}

function isVertical(size, ratio, partiallyCovered, minSize) {
	const [width, height] = size
	const r = width / height

	if (ratio <= Math.min(...minSize) / Math.max(...minSize)) {
		return width < height || partiallyCovered
	}

	return (r < ratio || partiallyCovered);
}

export function RatioSensibleTimeline({ratio = 1.5, ratios=[1,1,1,1], mapper, minSize=[0, 0], ...props}) {
	const {size, setSize, partiallyCovered} = useContext(CurrentNodeSizeContext)
	const [width, height] = size

	useEffect(()=>{
		const newSize = apply(isVertical(size, ratio, partiallyCovered, minSize), size, minSize)

		if (size.join("") !== newSize.join("")) {
			setSize(newSize)
		}
	})

	if (!width || !height || !minSize) {
		return (<></>)
	}

	if (isVertical(size, ratio, partiallyCovered, minSize)){
		return (
			<IsVerticalContext.Provider value={true} >
				<VerticalTimeline width={width} height={height} ratios={ratios} mapper={mapper} {...props} />
			</IsVerticalContext.Provider>
			)
	}

	return (
		<IsVerticalContext.Provider value={false} >
			<HorizontalTimeline width={width} height={height} ratios={flip([...ratios])} mapper={flip([...mapper])} {...props} />
		</IsVerticalContext.Provider>)
}

export default function({style, ...props}) {
	return (
			<CurrentNodeSizeSensible style={style}>
				<RatioSensibleTimeline {...props}/>
			</CurrentNodeSizeSensible>) 
}

