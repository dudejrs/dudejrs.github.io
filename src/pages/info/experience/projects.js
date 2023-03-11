import Project from './project/project'
import Multiplex from './project/multiplex_reservation'
import styles from './projects.module.css'

export default function Projects() {
	
	return (
			<div className={styles.projects_container}> 
				<Project className={styles.project_container} 
						src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80" 
						title="멀티플렉스 영화관 사이트 구현" 
						description="데이터베이스 과목 실습 과제로 Node.js Express 프레임워크와 MySQL을 이용하여 구현한 웹 앱 사이트입니다."
						tags="Node.js Mysql React.js"
						term="2019.10 ~ 2019.12"
						/>
				<Project className={styles.project_container} 
						src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80" 
						title="자연어 처리" description="수정중 입니다..."
						tags="python"
						term="2021.01 ~ 2021.02"
						/>
				<Project className={styles.project_container} 
						src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80" 
						title="WearOS 기반 주식 어플리케이션 발" description="수정중 입니다..."
						tags="Kotlin Node.js Python"
						term="2021.01 ~ 2021.02"
						/>
			</div>
		);
}