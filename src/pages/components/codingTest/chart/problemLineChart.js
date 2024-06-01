
import {useState, useEffect} from 'react'

import {getLog} from '../../../../domain/codingPractice'

import LineChart from './lineChart'


const defaultMargin = {
		top : 20 ,
		right : 20,
		left : 20,
		bottom : 20
}	

const defaultAxis = {
	left : 50,
	bottom : 50,
	margin : defaultMargin
}


function getTitle(keyword){

	switch(keyword){
		case 'count' :
			return `시간별 총 푼 문제 수`;
		case 'repetition' :
			return `시간별 총 푼 문제 반복`;
	}

	return `시간별 총 푼 문제 수 (${keyword})`;
}


export default function({width=1000, day=365, keyword='count', height, className}){

	const [data, setData] =  useState([0,10])
	const [axis, setAxis] = useState([])

	useEffect(()=>{
		getLog(Date.now(),day)
			.then(t => {
				setData(t.map(d => d))
				setAxis(t.map(d => new Date(d['date'])))
			})
	},[])

	return (
			<LineChart data={data.map(d=> d[keyword])} 
						axisData={axis}
						type={'time'}
						title={getTitle(keyword)}
						width={width} height={height}
						nticks={4}
						axis={{ left:50, bottom : 50, margin: defaultMargin, type: 'time', tickformat : 'month'}}
						className={className}
			/>
		)
}