
import styles from '../loadmap.module.css';

export default function DBMSAdministrator() {
	
	return (
			<>  

				<ul className={styles.track}>
					<li className={styles.track_title}>DBMS Administrator</li>
					<li>SQLD</li>
					<li>MySQL</li>
					<li>MongoDB</li>
					<li>GraphQL</li>
					<li>SQLP</li>
				</ul>

			</>
		);
}