import {useEffect} from 'react';

import Checkbox from '../../../../../components/checkbox';
import Tag from '../../../../../components/tag';

import tableStyles from './plansTable.module.css';

export default function PlanContainer({plan, columns, types, widths}){

	return (

		<div className={tableStyles.row}>
			<label className={tableStyles.label}></label>

			{
				columns.map((column, i) =>{

					if(types[i] == "multiselect") 
						return (<div className={tableStyles.column} style={{ width : `${widths[i]}px` }}>
								{plan[column].map(
								tag => (<Tag name= {tag}/ >))}
								</div>
								);
					if(types[i] == "checkbox")
						return ( <div className={`${tableStyles.column}`} style={{width : `${widths[i]}px`}}>
									<Checkbox value={plan[column]} />
								</div>);
					
					return (<div className={tableStyles.column} style={{ width : widths[i] }}>{plan[column]}</div>);

				})
			}

			<label className={tableStyles.label}></label>


		</div>
		);
}