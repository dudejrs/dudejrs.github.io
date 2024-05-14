import {useContext} from 'react'

import {Context} from '../../../components/ui/timeline/ratioSensible/context'
import {Tag} from '../../../components/ui'

import styles from './item.module.css'

export default function ({d, i}) {
	const isVertical = useContext(Context)

	if (isVertical) {
		return (
		<div key={i} className={`${styles.container} ${styles.vertical}`}>
			<h4> {d["name"]}</h4>	
			<div className={`${styles.subcontainer} ${styles.vertical}`}>
				<p> {d["date"]} </p>
				<div className={`${styles.taglist}`}> 
					{
						d["tag"].map((d, i) => <Tag key={i} name={d} className={`${styles.tag}`} />)	
					}
				</div>
			</div>
		</div>) 
	}

	return (
		<div key={i} className={`${styles.container} `}>
			<h4> {d["name"]}</h4>	
			<div className={`${styles.subcontainer} `}>
				<p> {d["date"]} </p>
			</div>
			<div className={`${styles.taglist}`}> 
				{
					d["tag"].map((d, i) => <Tag name={d} className={`${styles.tag}`} />)	
				}
			</div>
		</div>) 
}