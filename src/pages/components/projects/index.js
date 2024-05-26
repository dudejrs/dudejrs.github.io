import {useEffect, useState, useCallback} from 'react';

import {fetchExperience} from '../../../domain/experience'

import Project from './project';
import DetailedProject from './project/detailedProject'
import styles from './index.module.css';

function term(date) {
	return `${date.start} ~ ${date.end || 'ongoing'}`
}

export default function Projects({data : data_}) {

	const [data, setData] = useState([])

	const [isClicked, setIsClicked] = useState(false);
	const [target, setTarget] = useState(0);

	const handleClick = useCallback((idx)=>{
		setTarget(idx);
		setIsClicked(true);
	});

	useEffect(()=>{
		fetchExperience().then(d => setData(d))
	}, [])

	return (
			<div className={styles.projects_container}> 
			{
				 Array.isArray(data) && data.length > 0 && data.map( (project, index)=> {
					if(!project["이름"] || (isClicked && target != index)) return (<div key={index}/>)
					
					if(isClicked) return (<DetailedProject className={styles.project_container_clicked} 
						src= {project["이미지URL"]}
						title={project["이름"]} 
						description={project["요약(200자)"]}
						page={project["프로젝트URL"]}
						tags={project["기술"]}
						term={term(project["기간"])}
						isClicked={isClicked}
						onClick = {setIsClicked}
						key={index}
						/>);

					return (<Project className={styles.project_container} 
						src= {project["이미지URL"]}
						title={project["이름"]} 
						description={project["요약(50자)"]}
						tags={project["기술"]}
						term={term(project["기간"])}
						isClicked={isClicked}
						onClick = {handleClick	}
						index={index}
						key={index}
						/>)
				} )
			}
			</div>
		);
}