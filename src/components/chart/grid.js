
import {useRef, useEffect} from 'react'
import * as d3 from 'd3'

import {getScale, getAxis} from './axis'

import styles from './axis.module.css'

export default function({
		className,
		width, height, 
		data, axisData, 
		type, nticks=3,
		tickformat, color='black',
		hide= { x: false, y: false},
		margin={top: 0, right : 0, bottom : 0, left : 0 }
	}){
	
	const contentWidth = width - (margin.left+ margin.right)
	const contentHeight = height - (margin.top + margin.bottom)
	const gx = useRef();
	const gy = useRef();

	const x = getScale(type, axisData, margin, width)

	const y = d3.scaleLinear([Math.max(...data), Math.min(...data)],[margin.top, height- margin.bottom])
	


	const xAxis = getAxis(type, tickformat, x, axisData)
					.offset(0)
					.tickPadding(0)
					.tickSizeInner(contentHeight)
					.tickSizeOuter(contentHeight)

	const yAxis = d3.axisLeft(y)
					.ticks(nticks)
					.offset(0)
					.tickPadding(0)
					.tickSizeInner(contentWidth)
					.tickSizeOuter(contentWidth)



	useEffect(()=>{
		if(!hide.y){
			let horizontal = d3.select(gy.current)
				.call(yAxis)
			horizontal.select(".domain")
					.attr("stroke-width",0)
			horizontal.selectAll(".tick text")
					.remove()

		}
		
		if(! hide.x){
			let vertical = d3.select(gx.current)
				.call(xAxis)

			vertical.select(".domain")
					.attr("stroke-width",0)
			vertical.selectAll(".tick text")
					.remove()
		}

	}, [data, axisData])

	return (
		<svg width={width} height={height} color={color} className={`${className}`} strokeWidth={'0.5'} opacity={0.5} >
			<g ref={gx} className={`${styles.container}`} transform={`translate(0, ${margin.top})`}/>
			<g ref={gy} className={`${styles.container}`} transform={`translate(${contentWidth + margin.left}, 0)`} />
		</svg>
	)
}