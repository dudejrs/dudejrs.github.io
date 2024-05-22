import {useEffect, useState} from 'react';
import Table from '../../../../notion/table'
import styles from './index.module.css'

const columns = ["title", "기간",  "완료율", "Status"];
const types = ["title", "date",  "rollup", "status"];
const ratio = [3,2,1,1];

export default function PlanTable({name, title, plans=[], openSideContent}) {

	return (
			<div className={`${styles.table }`}>
				{ title && <h3 className={`${styles.title}`}>{title}</h3>}
				<Table columns={columns} types={types} data={plans} titleOnClick={openSideContent} ratio={ratio}/>
			</div>
		);
}