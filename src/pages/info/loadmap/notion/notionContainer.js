import {useEffect, useState, useCallback} from 'react';

import PlanTable from './planTable';
import SideContent from './sideContent'

import styles from './notionContainer.module.css'


import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';



export default function NotionContainer({name}) {

	const [active, setActive] = useState(false);
	const [target, setTarget] = useState(undefined);
	const openSideContent = useCallback((target)=>{
		setTarget(target);
		setActive(true);
	});
		
	return (
			<div className={`notion ${styles.container}`} id= "notionContainer">  
				<PlanTable name={name} openSideContent={openSideContent}/>
				{ target && <SideContent> </SideContent> }
			</div>
		);
}