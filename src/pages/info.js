
import styles from './info.module.css';
import Introduction from './info/introduction';
import Experience from './info/experience';
import Skills from './info/skills';
import Loadmap from './info/loadmap';

export default function Info() {
	
	return (
		<div className={styles.content}> 
			<h3>Info</h3>
			<Introduction />
			<Experience />
			<Skills />
			<Loadmap />
		</div>
		);
}