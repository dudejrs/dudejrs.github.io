
import styles from './item.module.css'


export default function({duration, name, level}){
	return (<div className={`${styles.container}`}> 
				<div className={`${styles.duration}`}> {duration}</div>
				<div className={`${styles.career}`}> 
					<div className={`${styles.careerName}`}> {name}</div>
					<div className={`${styles.careerLevel}`}> {level}</div>
				</div>
		</div>);
}