import SkillsStyles from './index.module.css';
import styles from './subStackItem.module.css';

export default function SubStackItem({title, items, levels, colors}) {
    return (
        <ul className={`${styles.subStack}`}>
            {title && <li className={styles.subStackTitle}> {title}</li>}
            {items &&
                items.map((item, index) => (
                    <li
                        className={styles.item}
                        key={index}
                        style={{backgroundColor: colors[levels[index]]}}
                    >
                        {' '}
                        {item}{' '}
                    </li>
                ))}
        </ul>
    );
}
