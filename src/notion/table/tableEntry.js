import {useEffect} from 'react';

import Checkbox from '../../components/checkbox';
import Tag from '../../components/tag';

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
						return (<TitleComponent title={data[column]} width={widths[i]} onClick={()=>{titleOnClick(data)}}/>);

					return (<ValueEntry className={tableStyles.column} data = {data[column]}  style={{ width : widths[i] }} type= {types[i]}/>);

				})
			}

			<label className={tableStyles.label}></label>


		</div>
		);


}