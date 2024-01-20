import {SpiderChart} from '../../../../components/chart'

import Box from './box'
import Legend from './legend'

import styles from './spiderChart.module.css'

export default function({data, title, items,
						 width, height, ratio, textRatio,
						ticks, ntick, lower, upper, colors 
					}){

	if(!colors){
		colors = ["#80bed7", "#EBB171", "#DE71EB", "#ACEB71"];
	}

	return (
		<Box width={'400px'} height={'440px'} className={`${styles.container}`}>
			<h4 className={`${styles.title}`}> {title} </h4>
			<SpiderChart width={width} height={height} 
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