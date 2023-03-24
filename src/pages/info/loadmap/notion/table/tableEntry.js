import {useEffect} from 'react';

import Checkbox from '../../../../../components/checkbox';
import Tag from '../../../../../components/tag';
import TitleComponent from './titleComponent'

import tableStyles from './table.module.css';

export default function TableEntry({data, columns, types, widths, titleOnClick}){

	return (

		<div className={tableStyles.row}>
			<label className={tableStyles.label}></label>

			{
				columns.map((column, i) =>{

					if(types[i] == "multiselect") 
						return (<div className={tableStyles.column} style={{ width : `${widths[i]}px` }}>
								{data[column].map(
								tag => (<Tag name= {tag}/ >))}
								</div>
								);
					if(types[i] == "checkbox")
						return ( <div className={`${tableStyles.column}`} style={{width : `${widths[i]}px`}}>
									<Checkbox value={data[column]} />
								</div>);

					if(types[i]=="title")
						return (<TitleComponent title={data[column]} width={widths[i]} onClick={()=>{titleOnClick(data)}}/>);
					
					return (<div className={tableStyles.column} style={{ width : widths[i] }}>{data[column]}</div>);

				})
			}

			<label className={tableStyles.label}></label>


		</div>
		);
}