import styles from './box.module.css'

export default function Box({className, children}){
	return(
	<div className={`${styles.container} ${className}`}>
		{children}
	</div>
	);
}