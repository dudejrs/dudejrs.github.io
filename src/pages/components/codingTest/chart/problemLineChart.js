
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


export default function({width=1000, keyword='count', height}){

	const [data, setData] =  useState([0,10])
	const [axis, setAxis] = useState([])

	useEffect(()=>{
		getLog(Date.now(),365)
			.then(t => {
				setData(t.map(d => d[keyword]))
				setAxis(t.map(d => new Date(d['date'])))
			})
	},[])

	return (
			<LineChart data={data} 
						axisData={axis}
						type={'time'}
						title={getTitle(keyword)}
						width={1000} height={height}
						nticks={3}
						axis={{ left:50, bottom : 50, margin: defaultMargin, type: 'time', tickformat : 'month'}}
			/>
		)
}