import {useEffect, useState} from 'react'
import {getActivitesPerMonth} from '../../domain/activities'

import {Item, ItemStack} from './item'
import Tick from './tick'
import {RatioSensibleTimeLine} from '../../components/ui'

const data = [
	[{ name : "[독서] SQL 자격 실전 문제 완독", date : "2024-02-26 ~ 2024-03-06", tag : ["Oracle", "DBMS"]}],
	[{ name : "[독서] 아토믹 코틀린 완독", date : "2024-01-25 ~ 2024-02-02", tag : ["Java", "Kotlin"]},
	{ name : "[독서] Go 마스터 하기 완독", date : "2024-01-25 ~ 2024-02-09", tag : ["Go", "DevOps"]},
	{ name : "[독서] 친절한 SQL 튜닝 완독", date : "2024-01-17 ~ 2024-02-09", tag : ["Oracle", "DBMS"]}],
	[{ name : "[독서] 도메인 주도 설계 완독", date : "2023-12-16 ~ 2024-01-06", tag : ["Backend", "Basic"]}]
]

const itemMapper = (d, i) => <Item key={i} d={d} i={i} />

const mapper = [
			undefined,
			(d, i) => <Tick d={d[0]} i={i} />,
			undefined,
			(d, i) => <ItemStack d={d[1]["계획"]} i={i} mapper={itemMapper}/>,
		]

export default function(){
	const [data, setData] = useState([])

	useEffect(()=> {
		getActivitesPerMonth().then((data) => {
			console.log(data)
			setData(data.slice(0,3))
		})
	},[])

	return (
		<div style={{width: '100%'}}>
			<RatioSensibleTimeLine  data={data} mapper={mapper} ratio={0.8} ratios={[0, 0.5, 0, 2]} bmargin={50} stroke={2} radius={4} color={'#aaa'} minSize={[1300, 600]}/>
		</div>
		);
}