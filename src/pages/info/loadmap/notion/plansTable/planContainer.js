import {useEffect} from 'react';

import Checkbox from '../../../../../components/checkbox';
import Tag from '../../../../../components/tag';

import tableStyles from './plansTable.module.css';
import './tagBackground.css'


const backgroundClassNames = ["notion-red_background ", "notion-pink_background", "notion-blue_background", "notion-purple_background", 
	"notion-teal_background", "notion-yellow_background", "notion-orange_background", "notion-brown_background", "notion-gray_background"];
const backgroundCoClassNames = ["notion-red_background_co ", "notion-pink_background_co", "notion-blue_background_co", "notion-purple_background_co", 
	"notion-teal_background_co", "notion-yellow_background_co", "notion-orange_background_co", "notion-brown_background_co", "notion-gray_background_co" ];
const backgroundDarkClassNames = ["notion-dark_red_background ", "notion-dark_pink_background", "notion-dark_blue_background", "notion-dark_purple_background", 
	"notion-dark_teal_background", "notion-dark_yellow_background", "notion-dark_orange_background", "notion-dark_brown_background", "notion-dark_gray_background"]

const randomBackground = ()=>{
	return backgroundDarkClassNames[ Math.floor(Math.random() * backgroundClassNames.length)];
}


export default function PlanContainer({plan, columns, types, widths}){

	return (

		<div className={tableStyles.row}>
			<label className={tableStyles.label}></label>

			{
				columns.map((column, i) =>{

					if(types[i] == "multiselect") 
						return (<div className={tableStyles.column} style={{ width : `${widths[i]}px` }}>
								{plan[column].map(
								tag => (<Tag className={`${randomBackground()}`} name= {tag}/ >))}
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