import * as d3 from 'd3'
import {useRef, useEffect} from 'react'

import styles from './axisBottom.module.css'

function getScale(type, data, margin, width) {
	switch(type){
		case 'length' : 
			return d3.scaleLinear().domain([0, data.length-1]).range([margin.left, width- margin.right]) 
		case 'time' :
			return d3.scaleTime().domain([data[0], data[data.length-1]]).range([margin.left, width- margin.right])
		default : 
			return d3.scalePoint().domain(data).range([margin.left, width- margin.right])
	}
}

function getAxis(tickformat, x, data){
	let ticks
	switch(tickformat){
		case 'day' : 
			ticks = d3.timeDays(data[0], data[data.length-1])

			return d3.axisBottom(x).tickValues(ticks)
					.tickFormat(x.tickFormat("%A %d"))
		
		case 'week' :
			ticks = d3.timeWeeks(data[0], data[data.length-1])

			return d3.axisBottom(x).tickValues(ticks)
						.tickFormat(x.tickFormat("%b %d"))
		case 'month' : 
			ticks = d3.timeMonths(data[0], data[data.length-1])
			return d3.axisBottom(x).tickValues(ticks)
				.tickFormat(x.tickFormat("%b"))

		default :
			return d3.axisBottom(x).ticks(data.length);
	}
}

export default function({className, type, color='black', data, width, height, tickformat,
	margin={top:0, right:0, left:0, bottom:0}, 
	outer=6, inner=6, padding=10, offset=0,
	hideLine=false
	}){

	if(hideLine){
		offset = -height;
	}

	const gx = useRef();
	const x = getScale(type, data, margin, width)
	const axis = getAxis(tickformat, x, data)
					.offset(offset)
					.tickSizeInner(inner)
					.tickSizeOuter(outer)
					.tickPadding(padding)


	useEffect(()=>{
		d3.select(gx.current).call(axis)
	},[])

	return (
		<svg className={`${styles.container}`} width={width} height={height}>
			<g ref={gx} />
		</svg>
		);
}