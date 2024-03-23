import {ProblemDonutChart, CategoryDonutChart,
		ProblemTypeSpiderChart, ProblemLineChart} from '../components/codingTest/chart'

import Layout from './layout'

import styles from './index.module.css'
import layoutStyles from './layout.module.css'

export default function({programmingLanguages}){

	const lang = 'C++'
	const categories = ['디자인패턴','코딩테스트', '리팩토링', '알고리즘']
	const types = ['Greedy', 'BFS', 'DFS', '완전탐색', '분할정복', '확률', "Back Tracking", "Branch and Bound"]

	return (
		<Layout title={'코딩 연습'} programmingLanguages={programmingLanguages}>
			<div className={`${styles.subcontainer} ${layoutStyles.subcontainer}`}>
				<ProblemDonutChart className={`${layoutStyles.item}`} programmingLanguages={programmingLanguages} layout={'landscape'}/>
				<CategoryDonutChart className={`${layoutStyles.item}`} languages={programmingLanguages} categories={categories} height={'440px'} layout={'landscape'}/>
				<ProblemTypeSpiderChart className={`${layoutStyles.item}`} types={types} fields={['count']}/>
			</div>
			<div className={`${styles.subcontainer} ${layoutStyles.subcontainer}`} >
				<ProblemLineChart className={`${layoutStyles.item}`} keyword={'count'} height={300} />
			</div>
		</Layout>
		);
}