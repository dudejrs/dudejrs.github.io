

import styles from '../loadmap.module.css';

export default function Graphic() {
	
	return (
			<>  
				<ul className={styles.track}>
					<li className={styles.track_title}>Graphic</li>
					<li> opengl ES3.0 </li>
					<li> webgl </li>
					<li> three.js </li>
					<li> d3.js </li>
				</ul>
			</>
		);
}