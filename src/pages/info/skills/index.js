
import MainStackItem from './mainStackItem'
import SubStackItem from './subStackItem'

import infoStyles from '../../info.module.css';
import styles from './index.module.css';

export default function Skills() {
	
	return (
			<div id="tech-stack" className={`${infoStyles.section} ${styles.skills_container}`}> 
				<h4> Skills </h4>
				
				<ul className={styles.mainStack}>
					<MainStackItem title="Backend">  
						<SubStackItem title="Framework" items={["Node.js","Spring & Spring Boot"]} />
						<SubStackItem title="Database" items={["Oracle","MySQL"]} />
						<SubStackItem title="Infa" items={["Linux","Aws"]} />
					</MainStackItem>
					<MainStackItem title="Frontend" items={["Html+Css","React.js"]} />
					<MainStackItem title="Programing Language" items={["Javascript","Java","C++","Python"]} />
				</ul>
			</div>
		);
}