import * as d3 from 'd3'
import {useRef, useEffect} from 'react'

import {getScale, getAxis} from './axis'

import styles from './axis.module.css'


export default function({className, type, data, width, height, tickformat,
	margin={top:0, right:0, left:0, bottom:0}, 
	outer=6, inner=6, padding=10, offset=0,
	color='black',
	hideLine=false
	}){
	
	const gx = useRef();
	const x = getScale(type, data, margin, width)
	const axis = getAxis(type, tickformat, x, data)
					.offset(offset)
					.tickSizeInner(inner)
					.tickSizeOuter(outer)
					.tickPadding(padding)


	useEffect(()=>{
		let group = d3.select(gx.current)
			.call(axis)

		if(hideLine){
			group.select(".domain")
				.attr("stroke-width",0)
		}
	},[])

	return (
		<svg className={`${styles.container} ${className}`} width={width} height={height} color={color}>
			<g ref={gx} className={`${styles.container} ${className}`}/>
		</svg>
		);
}