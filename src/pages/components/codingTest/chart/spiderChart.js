import Color from '../../../../components/color'

import {SpiderChart} from '../../../../components/chart'


import Box from './box'
import Legend from './legend'

import styles from './spiderChart.module.css'

export default function({data, title, items, children,
						 width=350, height=400, radius=125, ratio, textRatio,
						ticks, ntick, lower, upper, colors,
						className 
					}){

	if(!colors){
		colors = Color.diverseLight()
	}

	return (
		<Box width={`${width}px`} height={`${height}px`} className={`${styles.container} ${className}`}>
			<h4 className={`${styles.title}`}> {title} </h4>
			{
				children
			}
			<SpiderChart width={radius*2} height={radius*2} 
						data={data} 
						ticks={ticks} ntick={ntick} lower={lower} upper={upper}
						colors={colors}
						ratio={ratio} textRatio={textRatio}
						lineColor={'#898989'} tickColor={'#888'} keyColor={'#666'}
			/>
			{ items && <Legend items={items} colors={["#aaa"]} className={styles.legend} rem={0.4} />}
		</Box>
		)
}