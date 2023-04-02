import {useEffect, useState, useCallback} from 'react';

import TableEntry from './tableEntry'
import TableHeader from './tableHeader'




export default function Table({columns,  types, data, titleOnClick, ratio}) {
	
	const [widths, setWidths] = useState([]);	


	useEffect(()=>{

 		if(!ratio || !ratio.length || ratio.length != columns.length ){
 			ratio = Array(columns.length).fill(1);
 		}
 		setWidthsByTableContainerSize();

	},[]);

	const makeTableWidths = (amount) =>{
		console.log(ratio)
		let newWidths = new Array(columns.length).fill(1);
		newWidths = newWidths.map((_,i)=> {return amount * ratio[i]});
		return newWidths;
	}


	const setWidthsByTableContainerSize = useCallback(()=>{
		const parent_width = document.querySelector("#notionContainer").offsetWidth
		
		setWidths(makeTableWidths(parent_width/(ratio.reduce((a,b)=>a+b)+ 1)));
		// setWidths(makeTableWidths(parent_width/(columns.length)+ 1));

	},[widths])

	const setWidthByIndex = useCallback((index, amount)=>{
		setWidths(widths.map((width, i)=>{
			if(i == index) return amount;
			else return width;
		} ));
	})
	
	return (
			<div>  
				<TableHeader columns={columns} types={types} widths={widths} setWidthByIndex={setWidthByIndex}/>
				{data.map(datum => {
					return (<TableEntry columns={columns} types={types} data={datum} key={datum.id} widths={widths} titleOnClick={titleOnClick}/>);
				})}
			</div>
		);
}