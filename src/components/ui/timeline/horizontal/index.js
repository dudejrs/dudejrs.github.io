import {useState, useEffect} from 'react'
import * as d3 from 'd3'

import HorizontalLine from './line'
import RightItem from './rightItem'
import CenterItem from './centerItem'
import Point from '../point'

import {applyRatio} from '../util'
import {Context} from './heightsContext'

import styles from './index.module.css'

function itemWidth(width, radius, vmargin, length) {
	const w = (width - ( 2 * radius) - (2 * vmargin)) / (length )
	return  w - radius
}

export default function({
	data, 
	width, height,
	ratios,
	radius = 9, stroke = 6,
	margin = 50,
	vmargin = 10,
	bmargin,
	color = "#302eff",
	mapper,
	...props
}) {
	if (!data) {
		return 
		<div style={{width: width, margin: margin}}>
		</div>
	}

	const vwidth =  width - (margin * 2) 
	const vheight = Math.max(radius * 2, stroke)
	const [heights, setHeights] = useState(applyRatio(height - (margin * 2) - vheight - bmargin, ratios))
	
	const scale = d3.scalePoint().domain([ ...data, {}]).range([radius + vmargin, vwidth - radius - vmargin])

	useEffect(()=>{
		setHeights(applyRatio(height - (margin * 2) - vheight - bmargin, ratios))
	},[height])

	return (
		<div className={`${styles.container}`} style={{width: width, margin: margin}}>
			<Context.Provider value={{setHeights}}>
				<RightItem data={data} height= {heights[0]} vwidth={vwidth} radius={radius} vmargin={vmargin} mapper={mapper[0]} itemWidth={itemWidth} scale={scale} lower={true} {...props} />
				<CenterItem data={data} height= {heights[1]} vwidth={vwidth} radius={radius} vmargin={vmargin} mapper={mapper[1]} itemWidth={itemWidth} scale={scale} lower={true} {...props} />
				<HorizontalLine width={vwidth} height={vheight} stroke={stroke} color={color} margin={bmargin}>
					{
						data.map((d, i) => <Point key={i} color={color} cx={scale(d)} cy={vheight / 2} radius={radius} stroke={stroke * 2 / 3}/>)
					}
				</HorizontalLine>
				<CenterItem data={data} height= {heights[2]} vwidth={vwidth} radius={radius} vmargin={vmargin} mapper={mapper[2]} itemWidth={itemWidth} scale={scale} upper={true} {...props} />
				<RightItem data={data} height= {heights[3]} vwidth={vwidth} radius={radius} vmargin={vmargin} mapper={mapper[3]} itemWidth={itemWidth} scale={scale} upper={true} {...props} />
			</Context.Provider>
		</div>
		);
}
