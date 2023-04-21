
import MainStackItem from './mainStackItem'
import SubStackItem from './subStackItem'

import styles from './index.module.css';


export default function Skills({className, skills}) {

	
	return (
			<div id="tech-stack" className={`${className} ${styles.skills_container}`}> 
				<h4> Skills </h4>
				
				<ul className={styles.mainStack}>
					{
						Array.isArray(skills) && skills.map((skill)=> (<MainStackItem key={skill.title} title={skill.title} items={skill.items}/>))
					}

				</ul>
			</div>
		);
}