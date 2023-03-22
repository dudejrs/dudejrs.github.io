import {useEffect, useState} from 'react';

import PlanContainer from './plansTable/planContainer'
import PlansTableHeader from './plansTable/plansTableHeader'
import PlansTable from './plansTable'

import styles from './notionContainer.module.css'


import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

export default function NotionContainer({name}) {
		
	return (
			<div className={`notion ${styles.container}`} id= "notionContainer">  
				<PlansTable name={name} className={styles.content}/>
			</div>
		);
}