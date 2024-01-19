import styles from './box.module.css'

export default function Box({width='400px', height='220px', className, children}){
	return(
	<div className={`${styles.container} ${className}`} style={{width : width, height : height}} >
		{children}
	</div>
	);
}