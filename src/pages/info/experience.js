
import Projects from './experience/projects';
import InfoStyles from '../info.module.css';
import styles from './experience.module.css'


export default function Experience() {

	
	return (
			<div id="experience" className={`${InfoStyles.section} ${styles.container}`} > 
				<h4> Experience </h4>

				<Projects />
			</div>
		);
}