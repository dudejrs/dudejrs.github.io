import {useState, useEffect} from 'react'

import {DropdownTagList} from '../../../../components';

import {getFieldsByProgrammingType, getProblemTypes} from '../../../../domain/codingPractice'

import SpiderChart from './spiderChart'

function refineData(data, fields){
	
	let ret = []

	for(let field of fields){
		let r = {}
		for(let d of  data){
			let {name, ...other} = d
			r[name] = other[field]
		}
		ret.push(r)
	}

	return ret
}

function getTitle(type){
	if ('count' == type){
		return (<>문제 유형 별 <br/> 풀은 문제의 수</>)
	}

	if ('repetition' == type){
		return (<>문제 유형 별 <br/> 반복수</>)
	}

	return (<></>)
}

export default function({type='count', types, fields}){


	const [data, setData] = useState([{}])
	const [types_, setTypes] = useState([])
	const [allTypes, setAllTypes] = useState([])

	useEffect(()=>{
		setTypes([...types])
		getProblemTypes()
		.then(d=> setAllTypes(d))
	},[]);

	useEffect(()=>{
		getFieldsByProgrammingType(fields, types_)
				.then(d=> {setData(refineData(d, fields))
				})

	},[fields, types_])


	return (<SpiderChart width={300} height={300} 
					data={data} title={getTitle(type)}
					ratio={0.5} textRatio={0.7} >
					{ allTypes.length && <DropdownTagList names={allTypes} tags={types_} callback={setTypes}/> }
			</SpiderChart>
			)
}