

import Projects from '../components/projects';

import Section from './section'
import styles from './experience.module.css'


export default function Experience({projects}) {

	return (
			<Section className={`${styles.container}`} title={'Experience'} description={'현재까지 경험한 프로젝트들에 대한 요약정보입니다.'}> 
				<Projects data={projects}/>
			</Section>
		);
}