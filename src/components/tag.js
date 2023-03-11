
import styles from './tag.module.css'


export default function Tag({ name }) {
	return (
		<span className={styles.tag}>
		{ name }
		</span>
	)
}