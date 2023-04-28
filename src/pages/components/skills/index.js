
import MainStackItem from './mainStackItem'
import SubStackItem from './subStackItem'
import Legend from './legend'

import styles from './index.module.css';


export default function Skills({className, skills, colors, levelDescriptions}) {

	console.log(levelDescriptions);

	return (
			<div id="tech-stack" className={`${className} ${styles.skills_container}`}> 
				<h4> Skills </h4>
				
				<div className={`${styles.container}`}>
					<ul className={styles.mainStack}>
						{
							Array.isArray(skills) && skills.map((skill)=> (<MainStackItem key={skill.title} title={skill.title} items={skill.items} levels={skill.levels} colors={colors}/>))
						}

					</ul>
					{

						Array.isArray(levelDescriptions) &&  <Legend className={styles.legend} descriptions={levelDescriptions} colors={colors} />
					}
					
				</div>


			</div>
		);
}