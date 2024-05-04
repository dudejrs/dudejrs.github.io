import {useState} from 'react'
import * as d3 from 'd3'

import VerticalLine from './line'
import BehindItem from './behindItem'
import CenterItem from './centerItem'
import Point from '../point'

import {applyRatio} from '../util'
import {Context} from './widthsContext'

import styles from './index.module.css'

function itemHeight(height, radius, vmargin, length) {
	const h = (height - ( 2 * radius) - (2 * vmargin)) / (length )
	return  h - radius
}

export default function({
	data, 
	ratios	,
	width , height,
	margin = 0, vmargin = 10,
	radius = 9, stroke = 6,
	color = "#302eff",
	mapper
}) {
	const vheight = height - (margin * 2)
	const vwidth = Math.max(radius * 2, stroke)
	const [widths, setWidths] = useState(applyRatio(width - (2* margin) - vwidth, ratios))

	const scale = d3.scalePoint().domain([...data, {}]).range([radius + vmargin, vheight - radius -vmargin])

	return (
			<div className={`${styles.container}`} style={{height : height, margin : margin}}>  
				<Context.Provider value={{setWidths}}>
					<BehindItem data={data} width={widths[0]} vheight={vheight} vmargin={vmargin} radius={radius} mapper={mapper[0]} scale={scale} itemHeight={itemHeight} />
					<CenterItem data={data} width={widths[1]} vheight={vheight} vmargin={vmargin} radius={radius} mapper={mapper[1]} scale={scale} itemHeight={itemHeight} />
					<VerticalLine width={vwidth} height={vheight} color={color}> 
					{
						data.map((d, i)  => <Point key={i} color={color} cx={vwidth / 2} cy ={scale(d)} stroke={stroke * 2 / 3}/>)
					}
					</VerticalLine>
					<CenterItem data={data} width={widths[2]} vheight={vheight} vmargin={vmargin} radius={radius} mapper={mapper[2]} scale={scale} itemHeight={itemHeight} />
					<BehindItem data={data} width={widths[3]} vheight={vheight} vmargin={vmargin} radius={radius} mapper={mapper[3]} scale={scale} itemHeight={itemHeight} />
				</Context.Provider>
			</div>
		)
}