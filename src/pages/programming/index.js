import {ProblemDonutChart, LangaugeDonutChart,
		ProblemPercentageBox, LangaugeSpiderChart,
		ProblemTypeSpiderChart} from '../components/codingTest/chart'
	
export default function(){

	const programmingLanguages = ['C++', 'Java', 'Javascript', 'Python']
	const categories = ['디자인패턴','코딩테스트', '리팩토링', '알고리즘']

	return (
		<div style={{display : "flex", flexDirection: "column", flexWrap : "wrap"}}>
			<ProblemDonutChart programmingLanguages={programmingLanguages}/>
			<div style ={{display:"flex"}}>
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
				<ProblemTypeSpiderChart types={['Greedy', 'BFS', 'DFS', '완전탐색']} fields={['count']}/>
				<ProblemTypeSpiderChart type='repetition' types={['Greedy', 'BFS', 'DFS', '완전탐색']} fields={['repetition']}/>
				<ProblemTypeSpiderChart types={['Greedy', 'BFS', 'DFS', '완전탐색']} fields={['C++','Java','Python', 'Javascript']}/>
			</div>
		</div>
		);
}