

import {DonutChart, LinePlot, PercentageBox} from '../../components/chart'
import {ProblemDonutChart, LangaugeDonutChart,
		ProblemPercentageBox} from '../components/codingTest/chart'
	
export default function(){

	const programmingLanguages = ['C++', 'Java', 'Javascript', 'Python']
	const categories = ['디자인패턴', '리팩토링', '알고리즘', '코딩테스트']

	return (
		<div style={{display : "flex", flexWrap : "wrap"}}>
			<ProblemDonutChart programmingLanguages={programmingLanguages}/>
			<div style ={{display:"flex"}}>
				{
					programmingLanguages.map( lang => 
						(<LangaugeDonutChart language={lang} categories={categories}/>)
						)
				}
			</div>
			<ProblemPercentageBox programmingLanguages={programmingLanguages} />
		</div>
		);
}