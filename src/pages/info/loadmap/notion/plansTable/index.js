import {useEffect, useState, useCallback} from 'react';

import PlanContainer from './planContainer'
import PlansTableHeader from './plansTableHeader'


import {getPlans} from '../../../../../domain/plans';

const columns = ["title", "Tag", "남은 시간", "단위계획 수"	, "완료", "완료율", "장기/단기"];
const types = ["title", "multiselect", "rollup", "formula", "checkbox", "rollup", "multiselect"];



function makeTableWidths(amount){
	let newWidths = new Array(columns.length);
	newWidths.fill(amount);
	return newWidths;
}


export default function PlansTable({name}) {
	
	const [plans, setPlans]= useState([]);
	const [widths, setWidths] = useState([]);

	const setWidthsByTableContainerSize = useCallback(()=>{
		const parent_width = document.querySelector("#notionContainer").offsetWidth
		console.log(parent_width/(columns.length+1))
		
		setWidths(makeTableWidths(parent_width/(columns.length+1)));

	},[widths])

	const setWidthByIndex = useCallback((index, amount)=>{
		setWidths(widths.map((width, i)=>{
			if(i == index) return amount;
			else return width;
		} ));
	})

	useEffect(()=>{
		  getPlans(name)
		 	.then((p) => {
		 		setPlans(p);
		 		setWidthsByTableContainerSize();
		 	});

	},[]);

	
	return (
			<div className="plansContainer" id = "plansTable">  
				<PlansTableHeader columns={columns} types={types} widths={widths} setWidthByIndex={setWidthByIndex}/>
				{plans.map(plan => {
					return (<PlanContainer columns={columns} types={types} plan={plan} key={plan.id} widths={widths}/>);
				})}
			</div>
		);
}