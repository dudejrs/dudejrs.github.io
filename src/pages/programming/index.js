import {ProblemDonutChart, LangaugeDonutChart,
		ProblemPercentageBox, LangaugeSpiderChart,
		ProblemTypeSpiderChart, ProblemLineChart} from '../components/codingTest/chart'


import Layout from './layout'

import styles from './index.module.css'
import layoutStyles from './layout.module.css'

export default function(){

	const programmingLanguages = ['C++', 'Java', 'Javascript', 'Python']
	const lang = 'C++'
	const categories = ['디자인패턴','코딩테스트', '리팩토링', '알고리즘']
	const types = ['Greedy', 'BFS', 'DFS', '완전탐색', '분할정복', '확률', "Back Tracking", "Branch and Bound", "정규표현식", "PriorityQueue", "부분합"]

	return (
		<Layout title={'코딩 연습'}>
			<div className={`${styles.subcontainer} ${layoutStyles.subcontainer}`}>
				<ProblemDonutChart programmingLanguages={programmingLanguages} layout={'landscape'}/>
				<LangaugeDonutChart language={lang} categories={categories} height={'440px'} layout={'landscape'}/>
				<ProblemTypeSpiderChart types={types} fields={['count']}/>
			</div>
			<div className={`${styles.subcontainer} ${layoutStyles.subcontainer}`} >
				<ProblemLineChart keyword={'count'} height={300} />
			</div>
		</Layout>
		);
}