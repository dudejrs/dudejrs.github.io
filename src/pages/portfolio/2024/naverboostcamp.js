import axios from 'axios'
import {useState, useEffect} from 'react'
import {Printable, Page} from '../../../components/ui/printable'
import {VerticalTimeLine} from '../../../components/ui/timeline'
import {ProblemDonutChart, CategoryDonutChart,
		ProblemTypeSpiderChart, ProblemLineChart} from '../../components/codingTest/chart'

import styles from './naverboostcamp.module.css'

function Title({children}){

	return (
			<h3 className={`${styles.title}`}>
				{
					children
				}
			</h3>
		)
}

const planMapper = [undefined,
			(d, i) =>  {
				if (!d || !d["기간"]["start"] || !d["기간"]["end"]) {
					return <></>
				}
				return (<div className={`${styles.term}`}> {`${d["기간"].start.slice(0,10)} ~ ${d["기간"].end.slice(0,10)}`} </div>)
			},
			// (d, i) => d && <div className={`${styles.planNameContainer}`}> <div className={`${styles.planName}`}>{d["title"]} </div> <div className={styles.dot}></div> <div>{i + 1}</div></div>,
			(d, i) => d && <p className={`${styles.planNameContainer}`}> <span className={`${styles.planName}`}>{d["title"]} </span> <span className={styles.dot}></span> <span className={styles.number}>{i + 1}</span></p>,
			undefined]

export default function(){
	const [data, setData] = useState({})
	const programmingLanguages = ['C++', 'Java', 'Javascript', 'Python','Go', 'Kotlin','Typescript']
	const categories = ['디자인패턴','코딩테스트', '알고리즘']
	const types = ['Greedy', 'BFS', 'DFS', '완전탐색', '분할정복', 'DP']

	useEffect(()=> {
		axios.get(`/data/portfolio/2024/naverboostcamp/plan.json`)
			.then(({data}) => setData(data))
	}, [])

	useEffect(()=>{
		console.log(data)
		console.log(Object.keys(data).length > 0 && data["Infra"]["DBMS,SQL,Linux,Docker,Kubernetices"])	
	},[data])

	return (
		<Printable filename='2024_네이버부스트캠프_포트폴리오' layout='landscape'>		
			<Page className={`${styles.container}`}>
				<Title> 자기소개 </Title>
			</Page>

			<Page className={`${styles.container}`}>
				<div className={`${styles.titleContainer}`}>
					<Title> 웹개발자가 되기 위해 노력해온 과정1 : 코딩 테스트 공부 </Title>
					<div className={`${styles.titleDescription}`}> Node.js, Spring 등의 웹 프레임워크에 대해 공부했던 내용입니다. </div>
				</div>

				<div>
					<div className={`${styles.subcontainer}`}>
						<ProblemDonutChart className={`${styles.item}`} width={250} radius={50} lengendWidth={60} legendHeight={80} programmingLanguages={programmingLanguages} layout={'landscape'}/>
						<CategoryDonutChart className={`${styles.item}`} width={250} radius={50} languages={programmingLanguages} categories={categories} height={'440px'} layout={'landscape'}/>
						<ProblemTypeSpiderChart className={`${styles.item}`} width={250} height={"8cm"} radius={100} hidden={true} types={types} fields={['count']}/>
					</div>
					<div className={`${styles.subcontainer}`} >
						<ProblemLineChart className={`${styles.item}`} keyword={'count'} height={200} width={750} day={240} />
					</div>
					<div className={`${styles.description}`}>
						* 동일한 문제를 다른언어로 풀 수 있기 때문에, 총 풀은 문제의 수와 각 언어 별/카테고리 별 풀은 문제 수의 총합이 다를 수 있습니다.
					</div>
				</div>
			</Page>

			<Page className={`${styles.container}`}>
				<div className={`${styles.titleContainer}`}>
					<Title> 웹개발자가 되기 위해 노력해온 과정2 : web 프레임워크에 관한 공부 </Title>
					<div className={`${styles.titleDescription}`}> Node.js, Spring 등의 웹 프레임워크에 대해 공부했던 내용입니다. </div>
				</div>
				<div className={`${styles.sections}`}>
					{Object.keys(data) != 0 && <VerticalTimeLine data={data["Node.js,Spring,React,Angular"]} width={500} height={550} mapper={planMapper} ratio={1.5} ratios={[0, 0.5, 2, 0]} bmargin={50} stroke={2} radius={4} color={'#aaa'} minSize={[1000, 500]} className={`${styles.timeline}`}/>}
					<div className={`${styles.section}`}>
						<h4> 배운점 </h4>
						<h4> 네이버 부스트 캠프에 활용할 수 있는 점 </h4>
					</div>
				</div>
			</Page>

			<Page className={`${styles.container}`}>
				<div className={`${styles.titleContainer}`}>
					<Title> 웹개발자가 되기 위해 노력해온 과정3 : 인프라에 대한 공부 </Title>
					<div className={`${styles.titleDescription}`}> Node.js, Spring 등의 웹 프레임워크에 대해 공부했던 내용입니다. </div>
				</div>
				<div className={`${styles.sections}`}>
				{Object.keys(data) != 0 && data["Infra"] && <VerticalTimeLine data={data["Infra"]["DBMS,SQL,Linux,Docker,Kubernetices"]} width={500} height={500} mapper={planMapper} ratio={1.5} ratios={[0, 0.5, 2, 0]} bmargin={50} stroke={2} radius={4} color={'#aaa'} minSize={[1000, 500]} className={`${styles.timeline}`}/>} 
					<div className={`${styles.section}`}>
						<h4> 배운점 </h4>
						<h4> 네이버 부스트 캠프에 활용할 수 있는 점 </h4>
					</div>
				</div>

			</Page>
			
			<Page className={`${styles.container}`}>
				<div className={`${styles.titleContainer}`}>
					<Title> 웹개발자가 되기 위해 노력해온 과정4 : 클린코드, 디자인패턴, 소프트웨어설계 </Title>
					<div className={`${styles.titleDescription}`}> Node.js, Spring 등의 웹 프레임워크에 대해 공부했던 내용입니다. </div>
				</div>
				<div className={`${styles.sections}`}>
					{Object.keys(data) != 0 && <VerticalTimeLine data={data["Basic"].slice(0,4)} width={500} height={550} mapper={planMapper} ratio={1.5} ratios={[0, 0.5, 2, 0]} bmargin={50} stroke={2} radius={4} color={'#aaa'} minSize={[1000, 500]} className={`${styles.timeline}`}/>}
					<div className={`${styles.section}`}>
						<h4> 배운점 </h4>
						<h4> 네이버 부스트 캠프에 활용할 수 있는 점 </h4>
					</div>

				</div>
			</Page>

			<Page className={`${styles.container}`}>
				<div className={`${styles.titleContainer}`}>
					<Title> 웹개발자가 되기 위해 노력해온 과정4 : 클린코드, 디자인패턴, 소프트웨어설계 </Title>
					<div className={`${styles.titleDescription}`}> Node.js, Spring 등의 웹 프레임워크에 대해 공부했던 내용입니다. </div>
				</div>
				<div className={`${styles.sections}`}>
					{Object.keys(data) != 0 && <VerticalTimeLine data={data["Basic"].slice(4,8)} width={500} height={550} mapper={planMapper} ratio={1.5} ratios={[0, 0.5, 2, 0]} bmargin={50} stroke={2} radius={4} color={'#aaa'} minSize={[1000, 500]} className={`${styles.timeline}`}/>}
					<div className={`${styles.section}`}>
						<h4> 배운점 </h4>
						<h4> 네이버 부스트 캠프에 활용할 수 있는 점 </h4>
					</div>

				</div>
			</Page>			
			
			<Page className={`${styles.container}`}>
				<div className={`${styles.titleContainer}`}>
					<Title> 프로젝트 경험 요약 </Title>
					<div className={`${styles.titleDescription}`}> Node.js, Spring 등의 웹 프레임워크에 대해 공부했던 내용입니다. </div>
				</div>
				<div className={`${styles.sections}`}></div>
			</Page>			

		</Printable>
	)
}	