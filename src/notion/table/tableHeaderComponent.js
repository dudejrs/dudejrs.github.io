
import styles from './tableHeader.module.css';
import tableStyles from './table.module.css';

import Component from '../component';


export default function TableHeaderComponent({name, type, width, index, onDrag, onDragLeave}){
	
	return(
			<Component name={name} className={`${tableStyles.column} ${styles.column}`} type={type} style={{width :`${width}px`}}>
				<div className={styles.columnHandle} onDrag={(e)=>{onDrag(e,index);}} onDragEnd={onDragLeave} ></div>
			</Component>
				
			);
}

