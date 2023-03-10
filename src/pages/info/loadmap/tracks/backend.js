import TestComponent from '../../../../components/test.js'
import styles from '../loadmap.module.css';

export default function Backend() {
	
	return (
			<>  
				<ul className={styles.track}>
					<li className={styles.track_title}>BackEnd</li>
					<li> <TestComponent> Kafka </TestComponent> </li>
					<li> <TestComponent> Redis </TestComponent> </li>
				</ul>
			</>
		);
}