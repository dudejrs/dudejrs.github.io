import {LinePlot, AxisBottom, AxisLeft} from '../../../../components/chart';
import Box from './box'

import styles from './lineChart.module.css'

const defaultMargin = {
		top : 20 ,
		right : 20,
		left : 20,
		bottom : 20
}

const defaultAxis = {
	left : 50,
	bottom : 50,
	type : '',
	tickformat : '',
	margin : defaultMargin
}


export default function({data, axisData, title, width=400, height=220, 
		axis=defaultAxis, margin=defaultMargin, 
		ratio=[0.8, 0.5], className 
	}){


	const contentWidth = width * ratio[0]
	const contentHeight = height * ratio[1]

	return (
		<Box width={width+'px'} height={height+'px'} className={`${styles.container} ${className}`}>
			<h4 className={`${styles.title}`}>{title}</h4>
			<div className={`${styles.subContainer}`}>
				<AxisLeft data={data} width={axis.left} height={contentHeight} className={`${styles.axisLeft}`} 
					margin={{top: 20, bottom: 20}} nticks={3} padding={5} hideLine={true}/>
				<LinePlot data={data} width={contentWidth} height={contentHeight} margin={margin} />
				{
					axisData && axisData.length && axis.bottom &&
					<AxisBottom data={axisData} type={axis.type} tickformat={axis.tickformat} 
						width={contentWidth} height={axis.bottom} margin={defaultMargin}
						hideLine={false}
					 />
				}
			</div>
		</Box>
	)
}