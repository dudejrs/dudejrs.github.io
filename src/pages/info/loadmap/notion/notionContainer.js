import {useEffect, useState, useCallback} from 'react';

import PlanTable from './planTable';

import SidePeekContainer from '../../../../components/sidePeekContainer';

import styles from './notionContainer.module.css'



export default function NotionContainer({name}) {

	const [active, setActive] = useState(false);
	const [target, setTarget] = useState(undefined);
	const openSideContent = useCallback((target)=>{
		setTarget(target);
		setActive(true);
	});
		
	return (
			<SidePeekContainer id="notionContainer" className={`${styles.container}`} sideContent={<div>hello world</div>} active={active} close={()=>{setActive(false);}}>  
				<PlanTable name={name} openSideContent={openSideContent}/>
			</SidePeekContainer>
		);
}