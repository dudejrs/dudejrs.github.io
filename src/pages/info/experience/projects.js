import {useState, useCallback} from 'react';


import Project from './project/project';
import DetailedProject from './project/detailedProject'
import styles from './projects.module.css';



const data = [
		{
			title : "멀티플렉스 영화관 사이트 구현",
			src : "img/experience/multiplex_reservation copy.png",
			description : "데이터베이스 과목 실습 과제로 Node.js Express 프레임워크와 MySQL을 이용하여 구현한 웹 앱 사이트입니다.",
			tags : "Node.js Mysql React.js",
			term : "2019.10 ~ 2019.12"
		},
		{
			title : "자연어 처리",
			src : "",
			// src : "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80",
			description : "수정중 입니다...",
			tags : "Python",
			term : "2021.01 ~ 2021.02"
		},
		{
			title : "WearOS 기반 주식 어플리케이션 개발",
			src : "img/experience/wear_os_application.png",
			description : "수정중 입니다...",
			tags : "Kotlin Node.js Python",
			term : "2021.05 ~ 2021.06"
		},
		{
			title : "",
			src : "",
			description : "",
			tags : "",
			term : ""
		},

	];


export default function Projects() {

	const [isClicked, setIsClicked] = useState(false);
	const [target, setTarget] = useState(0);

	const handleClick = useCallback((idx)=>{
		setTarget(idx);
		setIsClicked(true);
	});

	
	return (
			<div className={styles.projects_container}> 
			{
				data.map( (project, index)=> {
					if(!project.title || (isClicked && target != index)) return (<></>)
					
					if(isClicked) return (<DetailedProject className={styles.project_container_clicked} 
						src= {project["src"]}
						title={project["title"]} 
						description={project["description"]}
						tags={project["tags"]}
						term={project["term"]}
						isClicked={isClicked}
						onClick = {setIsClicked}
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
						/>)
				} )
			}
			</div>
		);
}