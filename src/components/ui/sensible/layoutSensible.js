import {useEffect, useState, useContext} from 'react'

import {Context as CurrentNodeSizeContext} from './context/currentNodeSize'
import {Context as LayoutContext} from './context/layout'

import CurrentNodeSizeSensible from "./currentNodeSizeSensible"

function isVertical(width, height, ratio) {
	const r = width / height
	return r < ratio ;
}

function LayoutSensible({ratio, children, ...props}) {
	const {size, setSize, partiallyCovered} = useContext(CurrentNodeSizeContext)
	const [width, height] = size

	let layout =  document.body.clientWidth / document.body.clientHeight  >=1 ? 'landscape' : 'portrait'
	
	if (partiallyCovered || isVertical(size, ratio)){
		layout = 'portrait'
	}

	return (
		<LayoutContext.Provider value={layout} >
			{
				children
			}
		</LayoutContext.Provider>)
}

export default function({style, ratio, children, className, ...props}) {

	return (
			<CurrentNodeSizeSensible className={className} style={style}>
				<LayoutSensible ratio={ratio} {...props}>
					{
						children
					}
				</LayoutSensible>
			</CurrentNodeSizeSensible>) 
}

