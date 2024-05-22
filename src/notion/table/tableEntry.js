import {useEffect} from 'react';

import Checkbox from '../../components';
import {Tag} from '../../components';

import ValueEntry from '../valueEntry';	
import TitleComponent from './titleComponent'

import tableStyles from './table.module.css';

export default function TableEntry({data, columns, types, widths, titleOnClick}){

	return (

		<div className={tableStyles.row}>
			<label className={tableStyles.label}></label>

			{
				columns.map((column, i) =>{

					if(types[i]=="title")
						return (<TitleComponent key={i} title={data[column]} width={widths[i]} onClick={()=>{titleOnClick(data)}}/>);

					return (<ValueEntry key={i} className={tableStyles.column} data = {data[column]}  style={{ width : widths[i] }} type= {types[i]}/>);

				})
			}

			<label className={tableStyles.label}></label>


		</div>
		);


}