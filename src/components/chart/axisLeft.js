import {useRef, useEffect} from 'react'


import * as d3 from 'd3'

import styles from './axis.module.css'


export default function({data, width, height, nticks = 3,
	margin={top:0, right:0, left:0, bottom:0},
	offset=0,padding=0, inner=6, outer=6,
	className,
	hideLine=false
	}){


	const gy = useRef();

	const y = d3.scaleLinear()
				.domain([Math.max(...data), Math.min(...data)])
				.range([margin.top, height- margin.bottom])

	const axis = d3.axisLeft(y)
					.ticks(nticks)
					.offset(offset)
					.tickSizeInner(inner)
					.tickSizeOuter(outer)
					.tickPadding(padding)


	useEffect(()=>{
		let group = d3.select(gy.current)
			.call(axis)
		if(hideLine){
			group.select(".domain")
				.attr("stroke-width",0)
		}
	},[])

	
	return (
		<svg width={width} height={height} className={`${className ? className : ''} ${styles.container}`}>
			<g ref={gy} className={`${styles.container}`} transform={`translate(${width}, 0)`} />
		</svg>
	)
}