
import styles from './tag.module.css'


export default function Tag({ name, className }) {
	return (
		<div className={`${styles.tag} ${className}`}>
		{ name }
		</div>
	)
}