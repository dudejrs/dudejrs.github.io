import {useParams} from 'react-router-dom'

import {LangaugeDonutChart, ProblemTypeSpiderChart, ProblemLineChart} from '../components/codingTest/chart'

import Layout from './layout'

import layoutStyles from './layout.module.css'
import styles from './perLanguage.module.css'
	
export default function(){

	const programmingLanguages = ['C++', 'Java', 'Javascript', 'Python']
	const {i} = useParams()

	if(typeof(i) != Number && i < 0 || i >= programmingLanguages.length){
		return (<div>준비중입니다...</div>)
	}
	const lang = programmingLanguages[i]

	const categories = ['디자인패턴','코딩테스트', '리팩토링', '알고리즘']
	const types = ['Greedy', 'BFS', 'DFS', '완전탐색', '분할정복', '확률', "Back Tracking", "Branch and Bound", "정규표현식", "PriorityQueue", "부분합"]

	return (
		<Layout title={`${lang} 에 관한 코딩 연습`}>
			<div className={`${styles.subcontainer} ${layoutStyles.subcontainer}`}>
				<LangaugeDonutChart language={lang} categories={categories} height={'440px'} layout={'landscape'}/>
				<ProblemTypeSpiderChart types={types} fields={[lang]}/>
			</div>
			<div className={`${styles.subcontainer} ${layoutStyles.subcontainer}`}>
				<ProblemLineChart keyword={lang} height={300} />
			</div>
		</Layout>
		);
}