import {useCallback, useState} from 'react';

import PlansTableHeaderComponent from './plansTableHeaderComponent';

import styles from './plansTableHeader.module.css';
import tableStyles from './plansTable.module.css';
import tableHeaderStyles from './plansTableHeader.module.css';



export default function PlansTableHeader({columns, types, widths, setWidthByIndex }){

	const [draged, setDragged] = useState(false);


	const onDrag = useCallback((e, index)=>{	

		let start = e.target.parentElement.getBoundingClientRect().x

		console.log("dragged");
		setDragged(true);
		setWidthByIndex(index,e.clientX - start);	

		e.target.classList.add(`${tableHeaderStyles.dragging}`);

		
	});

	const onDragLeave = useCallback((e)=> {
		console.log('a');
		e.target.classList.remove(`${tableHeaderStyles.dragging}`);
	});



	return(<div className={tableStyles.row}>
					<label className={tableStyles.label}>
					</label>

					{
						Array(7).fill(1).map((_,i)=> {
							return (<PlansTableHeaderComponent name={columns[i]} type={types[i]} width={widths[i]} key={i} index={i}   onDrag={onDrag} onDragLeave={onDragLeave}/>);
						})
					}

					<label className={tableStyles.label}>
					</label>
				</div>);
}