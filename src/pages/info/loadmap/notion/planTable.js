import {useEffect, useState} from 'react';


import Table from './table'

import {getPlans} from '../../../../domain/plans';


const columns = ["title", "Tag", "남은 시간", "단위계획 수"	, "완료", "완료율", "장기/단기"];
const types = ["title", "multiselect", "rollup", "formula", "checkbox", "rollup", "multiselect"];


export default function PlanTable({name, openSideContent}) {
	
	const [plans, setPlans]= useState([]);

	const [isloaded , setIsloaded] = useState(false) ;

	useEffect(()=>{
		  getPlans(name)
		 	.then((p) => {
		 		setPlans(p);
		 		setIsloaded(true);
		 	});

	},[]);

	
	return (
			isloaded && <Table columns={columns} types={types} data={plans} titleOnClick={openSideContent}/>
		);
}