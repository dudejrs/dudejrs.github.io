import {useContext} from 'react'

import {Context} from '../../../components/ui/timeline/ratioSensible/context'
import {Tag} from '../../../components/ui'

import styles from './abbreviate.module.css'

const month = (date) => {
	const startDate = date.split("~")[0].split("-")
	const endDate = date.split("~")[1].split("-")

	if (startDate[1] === endDate[1]) {
		return `${startDate[1]}월`
	}

	return `${startDate[1]}월 ~ ${endDate[1]}월`
}

export default function ({d, i}) {
	const isVertical = useContext(Context)

	if (isVertical) {
		return (
		<div key={i} className={`${styles.container} ${styles.vertical}`}>
			<div className={`${styles.subcontainer} ${styles.vertical}`}>
			<h4> {d["name"]}</h4>	
				<p> {month(d["date"])} </p>
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
			<div className={`${styles.subcontainer} `}>
				<h4> {d["name"]}</h4>	
				<p> {month(d["date"])} </p>
				<div className={`${styles.taglist}`}> 
					{
						d["tag"].map((d, i) => <Tag key={i} name={d} className={`${styles.tag}`} />)	
					}
				</div>
			</div>
		</div>) 
}