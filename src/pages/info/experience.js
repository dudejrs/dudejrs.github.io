

import Projects from '../components/projects';

import InfoStyles from './index.module.css';
import styles from './experience.module.css'


export default function Experience({projects}) {

	return (
			<div id="experience" className={`${InfoStyles.section} ${styles.container}`} > 
				<h4> Experience </h4>
				<Projects data={projects}/>
			</div>
		);
}