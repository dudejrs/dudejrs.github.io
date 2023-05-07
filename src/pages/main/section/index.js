import styles from './index.module.css'


export default function Section({className, children, title}){
	return (
		<div className={`${styles.container} ${className}`}>
			<b className={styles.title} >{title}</b>
			{
				children
			}
		</div>
		);
}