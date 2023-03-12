
import SkillsStyles from '../skills.module.css';
import styles from './subStackItem.module.css';

export default function SubStackItem({title, items}) {
	
	return (
		<ul className={`${styles.subStack}`} >
			{
				title && <li className={styles.subStackTitle}> {title}</li>
			}
			{
				items&& items.map(item =>
					<li className={styles.item}> {item} </li>
				)
			}
		</ul>

		);
}