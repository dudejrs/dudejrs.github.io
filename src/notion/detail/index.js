import React, {useCallback} from 'react';

import Component from '../component'
import ValueEntry from '../valueEntry'

import styles from './detail.module.css'



export default function Detail ({ className, children, data, filterList, types }){
	
	const isContainFilter = (key ,filterList) => {
		return !filterList.some((f)=>(key == f));
	}

	const renderChild = useCallback(()=>{
		return React.Children.map(children, (child)=>{
			return React.cloneElement(child, {
				data : data
			})
		});
	});

	return (
		<div className={`${styles.container} ${className}`}>	
			{
				Object.keys(data).filter((key)=> {return isContainFilter(key, filterList)}).map((key)=>{
					return(
						<div className={`${styles.component} ${styles[types[key]]}`}>
							<Component className={`${styles[`${types[key]}_key`]} ${styles.key} ${styles.hoveringbox}`} type={types[key]}> {key} </Component>
							<ValueEntry className={`${styles[`${types[key]}_value`]} ${styles.value} ${styles.hoveringbox}`} type={types[key]} data={data[key]}>  </ValueEntry>
						</div>);
				})
			}
			<div className={styles.children}>
				{renderChild()}
			</div>
		</div>
	);
}