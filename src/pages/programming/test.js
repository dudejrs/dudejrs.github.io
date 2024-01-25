import {ProblemDonutChart, LangaugeDonutChart,
		ProblemPercentageBox, LangaugeSpiderChart,
		ProblemTypeSpiderChart, ProblemLineChart, CategoryDonutChart} from '../components/codingTest/chart'
	
export default function(){

	const programmingLanguages = ['C++', 'Java', 'Javascript', 'Python']
	const categories = ['디자인패턴','코딩테스트', '리팩토링', '알고리즘']
	const types = ['Greedy', 'BFS', 'DFS', '완전탐색', '분할정복', '확률', "Back Tracking", "Branch and Bound", "정규표현식", "PriorityQueue", "부분합"]

	return (
		<div style={{display : "flex", flexDirection: "column", flexWrap : "wrap"}}>
			<ProblemDonutChart programmingLanguages={programmingLanguages}/>
			<div style ={{display:"flex"}}>
				<CategoryDonutChart languages={programmingLanguages} categories={categories} />
				{
					programmingLanguages.map((lang,i) => 
						(<LangaugeDonutChart language={lang} categories={categories} key={i}/>)
						)
				}
			</div>
			<ProblemPercentageBox programmingLanguages={programmingLanguages} />
			<div style ={{display:"flex"}}> 
				{
					programmingLanguages.map((lang,i) => (<LangaugeSpiderChart language={lang} categories={categories} key={i}/>))
				}
			</div>
			<div style ={{display:"flex"}}>
				<ProblemTypeSpiderChart types={types} fields={['count']}/>
				<ProblemTypeSpiderChart type='repetition' types={types} fields={['repetition']}/>
				<ProblemTypeSpiderChart types={types} fields={['C++','Java','Python', 'Javascript']}/>
			</div>
			<div>
				<ProblemLineChart height={400} />
				{
					programmingLanguages.map((lang,i) => <ProblemLineChart key={i} keyword={lang} height={400} />)
				}
			</div>
		</div>
		);
}