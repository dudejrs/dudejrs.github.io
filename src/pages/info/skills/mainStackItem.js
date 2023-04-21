
import SubStackItem from './subStackItem';

import SkillsStyles from './index.module.css';
import styles from './mainStackItem.module.css';

export default function MainStackItem({children, title, items}) {
	
	return (
			<li className ={styles.mainStackItem}>  
				<span className={styles.title}> {title}  </span> 
				{children}
				{items && <SubStackItem items={items} />}
			</li>
		);
}