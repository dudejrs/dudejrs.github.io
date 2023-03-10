
import infoStyles from '../info.module.css';
import styles from './techstack.module.css';

export default function Techstack() {
	
	return (
			<div id="tech-stack" className={infoStyles.section}> 
			<h4> Skills </h4>
			<ul className={styles.mainStack}>
				<li className ={styles.mainStackItem}>  
					<h5> Backend  </h5> 
					<ul className ={`${styles.subStack} ${styles.mainStackSub}`}>
						<li className={styles.subStackTitle}> Framework</li>
						<li> Node.js </li>
						<li> Spring Framework </li>
					</ul>
					<ul className ={`${styles.subStack} ${styles.mainStackSub}`}>
						<li className={styles.subStackTitle}> Database</li>
						<li> Oracle </li>
						<li> MySQL </li>
					</ul>
					<ul className ={`${styles.subStack} ${styles.mainStackSub}`}>
						<li className={styles.subStackTitle}> Infra</li>
						<li> Ubuntu/Linux </li>
						<li> AWS </li>
					</ul>
				</li>
				<li className ={styles.mainStackItem}>  
					<h5> Frontend  </h5> 
					<div className={styles.mainStackSub}> 
						<h4> React.js </h4>
					</div>
					<div className={styles.mainStackSub}> 
						<h4> CSS </h4>
					</div>
				</li>
				<li className ={styles.mainStackItem}>  
					<h5> Programing Language  </h5> 
					<div className={styles.mainStackSub}> <h4>Javascript</h4> </div>
					<div className={styles.mainStackSub}> <h4>Java</h4> </div>
					<div className={styles.mainStackSub}> <h4>C++</h4> </div>
					<div className={styles.mainStackSub}> <h4>Python</h4> </div>
				</li>
			</ul>
			</div>
		);
}