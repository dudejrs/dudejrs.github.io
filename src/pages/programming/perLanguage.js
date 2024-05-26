import {useParams} from 'react-router-dom'

import {LangaugeDonutChart, ProblemTypeSpiderChart, ProblemLineChart} from '../components/codingTest/chart'
import {Tooltip} from '../../components/ui'

import Layout from './layout'

import layoutStyles from './layout.module.css'
import styles from './perLanguage.module.css'


function Title ({title}) {
	return (<div className={`${styles.title}`}> 
				{title} 
				<Tooltip position={"top"} widthpx={"500px"}> 
					<div className={`${styles.tooltipContent}`}><p> 각 프로그래밍 언어 별 코딩테스트 연습을 한 기록입니다. <br/>
					코드는 <a href="https://github.com/dudejrs/coding-practice">여기</a>에서 볼 수 있습니다.</p>
					 </div>
				</Tooltip> 
			</div>)
}
	
export default function({programmingLanguages}){

	const {i} = useParams()

	if(typeof(i) != Number && i < 0 || i >= programmingLanguages.length){
		return (<div>준비중입니다...</div>)
	}
	const lang = programmingLanguages[i]

	const categories = ['디자인패턴','코딩테스트', '리팩토링', '알고리즘']
	const types = ['Greedy', 'BFS', 'DFS', '완전탐색', '분할정복', '확률', "Back Tracking", "Branch and Bound"]

	return (
		<Layout title={<Title title={`${lang} 에 관한 코딩 연습`}/>} programmingLanguages={programmingLanguages}>
			<div className={`${styles.subcontainer} ${layoutStyles.subcontainer}`}>
				<LangaugeDonutChart className={`${layoutStyles.item}`} language={lang} categories={categories} height={'440px'} layout={'landscape'}/>
				<ProblemTypeSpiderChart className={`${layoutStyles.item}`} types={types} fields={[lang]}/>
			</div>
			<div className={`${layoutStyles.subcontainer} ${layoutStyles.subcontainer}`}>
				<ProblemLineChart className={`${layoutStyles.item}`} keyword={lang} height={300} />
			</div>
		</Layout>
		);
}