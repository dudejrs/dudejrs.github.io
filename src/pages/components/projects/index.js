import {useState, useCallback} from 'react';


import Project from './project/project';
import DetailedProject from './project/detailedProject'
import styles from './index.module.css';




export default function Projects({data}) {

	const [isClicked, setIsClicked] = useState(false);
	const [target, setTarget] = useState(0);

	const handleClick = useCallback((idx)=>{
		setTarget(idx);
		setIsClicked(true);
	});

	
	return (
			<div className={styles.projects_container}> 
			{
				 Array.isArray(data) && data.map( (project, index)=> {
					if(!project.title || (isClicked && target != index)) return (<div key={index}/>)
					
					if(isClicked) return (<DetailedProject className={styles.project_container_clicked} 
						src= {project["src"]}
						title={project["title"]} 
						description={project["description"]}
						tags={project["tags"]}
						term={project["term"]}
						isClicked={isClicked}
						onClick = {setIsClicked}
						key={project["title"]}
						/>);

					return (<Project className={styles.project_container} 
						src= {project["src"]}
						title={project["title"]} 
						description={project["description"]}
						tags={project["tags"]}
						term={project["term"]}
						isClicked={isClicked}
						onClick = {handleClick	}
						index={index}
						key={project["title"]}
						/>)
				} )
			}
			</div>
		);
}