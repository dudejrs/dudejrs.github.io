
import styles from './tableHeader.module.css';
import tableStyles from './table.module.css';

import Component from '../component';


export default function TableHeaderComponent({className, name, type, width, index, onDrag, onDragLeave, lineStyle}){
	
	return(
			<Component name={name} className={`${tableStyles.column} ${styles.column} ${className}`} type={type} style={{width :`${width}px`, borderRight : lineStyle}}>
				<div className={styles.columnHandle} onDrag={(e)=>{onDrag(e,index);}} onDragEnd={onDragLeave} ></div>
			</Component>
				
			);
}

