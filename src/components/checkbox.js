
import {useEffect} from 'react';

import styles from './checkbox.module.css';


const checkbox = {
	"false" : (
		<div className={styles.uncheckedBox}>
			<svg viewBox="0 0 16 16" className={styles.checkboxSquare}>
				<path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z"></path>
			</svg>
		</div>
		),
	"true" : (
		<div className={styles.checkedBox}>
			<svg viewBox="0 0 14 14" className={styles.check}>
				<polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
			</svg>
		</div>
		)
}


export default function Checkbox({value}){

	return (
			<div>
				{
					checkbox[value]
				}
			</div>
		);
}