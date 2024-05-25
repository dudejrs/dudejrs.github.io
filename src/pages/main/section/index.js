import styles from './index.module.css'


export default function Section({className, children, title, style}){
	return (
		<div className={`${styles.container} ${className}`} style={style}>
			<b className={styles.title} >{title}</b>
			{
				children
			}
		</div>
		);
}