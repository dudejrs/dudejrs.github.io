
import styles from './item.module.css'


export default function({date, name, organization}){
	return (
		<div className={`${styles.container}`}>
			<div className={`${styles.date}`}>{date}</div>
			<div className={`${styles.name}`}>{name}</div>	
			<div className={`${styles.organization}`}>{organization}</div>	
		</div>
	);
}