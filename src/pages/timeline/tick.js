import styles from './tick.module.css'

export default function({d, i}) {
	return <div className={`${styles.tick}`}>{d}</div>
}