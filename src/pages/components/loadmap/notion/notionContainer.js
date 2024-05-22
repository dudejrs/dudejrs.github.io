import {useEffect, useState, useCallback} from 'react';

import PlanTable from './planTable';
import ProjectTable from './projectTable'
import PracticeTable from './practiceTable'
import CertificateTable from './certificateTable'
import PlanDetail from './planDetail';
import { SidePeekContainer } from '../../../../components';
import {getCategories} from '../../../../domain/categories';

import styles from './notionContainer.module.css'

export default function NotionContainer({name}) {
	const [plans, setPlans]= useState([]);
	const [projects, setProjects] = useState([]);
	const [certificates, setCertificates] = useState([]);
	const [practices, setPractices] = useState([]);


	const [active, setActive] = useState(false);
	const [target, setTarget] = useState(undefined);
	const openSideContent = useCallback((target)=>{
		setTarget(target["id"]);
		setActive(true);
	});

	useEffect(()=>{
		getCategories(name)
			.then((d) => {
				setPlans(d["계획"])
				if (d["프로젝트"]) {
					setProjects(d["프로젝트"])
				}
				if (d["자격증"]) {
					setCertificates(d["자격증"])
				}
				if (d["실습"]) {
					setPractices(d["실습"])
				}
			})

	},[]);
		
	return (
			<SidePeekContainer id="notionContainer" className={`${styles.container}`} sideContent={<PlanDetail target={target} />} active={active} close={()=>{setActive(false);}}>  
				{ plans.length > 0 && <PlanTable title={"계획"} name={name} plans={plans} openSideContent={openSideContent} />}
				{ projects.length > 0 && <ProjectTable title={"프로젝트 경험"} name={name} projects={projects} />}
				{ certificates.length > 0 && <CertificateTable title={"자격증"} name={name} certificates={certificates} />}
				{ practices.length > 0 && <PracticeTable title={"실습"} name={name} practices={practices} />}
			</SidePeekContainer>
		);
}