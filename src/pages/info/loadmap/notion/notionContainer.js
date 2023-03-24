import {useEffect, useState, useCallback} from 'react';

import PlanTable from './planTable';
import PlanDetail from './planDetail';
import SidePeekContainer from '../../../../components/sidePeekContainer';

import styles from './notionContainer.module.css'



export default function NotionContainer({name}) {

	const [active, setActive] = useState(false);
	const [target, setTarget] = useState(undefined);
	const openSideContent = useCallback((target)=>{
		setTarget(target["id"]);
		setActive(true);
	});
		
	return (
			<SidePeekContainer id="notionContainer" className={`${styles.container}`} sideContent={<PlanDetail target={target}/>} active={active} close={()=>{setActive(false);}}>  
				<PlanTable name={name} openSideContent={openSideContent}/>
			</SidePeekContainer>
		);
}