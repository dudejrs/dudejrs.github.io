import {RatioSensibleTimeLine} from '../components/ui'

const data = [
	{ name : "[독서] SQL 자격 실전 문제 완독", date : "2024-02-26 ~ 2024-03-06", tag : ["Oracle", "DBMS"]},
	{ name : "[독서] 아토믹 코틀린 완독", date : "2024-01-25 ~ 2024-02-02", tag : ["Java", "Kotlin"]},
	{ name : "[독서] Go 마스터 하기 완독", date : "2024-01-25 ~ 2024-02-09", tag : ["Go", "DevOps"]},
	{ name : "[독서] 친절한 SQL 튜닝 완독", date : "2024-01-17 ~ 2024-02-09", tag : ["Oracle", "DBMS"]},
	{ name : "[독서] 도메인 주도 설계 완독", date : "2023-12-16 ~ 2024-01-06", tag : ["Backend", "Basic"]}
]

const mapper = [
			undefined,
			(d, i) => d.date.split("~")[1],
			undefined,
			(d, i) => <div style={{marginLeft: 10, marginBottom: 10,  height:"100%", border :'1px solid #efefef'}}>..</div>,
		]

export default function(){
	return (
		<div style={{width: '100%'}}>
			<RatioSensibleTimeLine  data = {data} mapper={mapper} ratio={1.5} ratios={[0, 0.1, 0, 0.9]} stroke={3} radius={6} color={'#bbb'} minSize={[1200, 1000]}/>
		</div>
		);
}