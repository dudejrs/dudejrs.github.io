import {useContext} from 'react'

import {Context} from '../../../../components/ui/timeline/ratioSensible/context'
import {Tag} from '../../../../components/ui'

import styles from './index.module.css'

function toString(date) {
	if (!date["start"] || !date["end"]) {
		return null
	}

	const start = date["start"].slice(0,10)
	const end =date["end"].slice(0,10)

	return `${start} ~ ${end}`
}

export default function ({d, i}) {
	const isVertical = useContext(Context)

	if (isVertical) {
		return (
		<div key={i} className={`${styles.container} ${styles.vertical}`}>
			<h4> {d["title"]}</h4>	
			<div className={`${styles.subcontainer} ${styles.vertical}`}>
				<p> {toString(d["기간"])} </p>
				<div className={`${styles.taglist}`}> 
					{
						Array.isArray(d["Tag"]) && d["Tag"].map((d, i) => <Tag key={i} name={d} className={`${styles.tag}`} />)	
					}
				</div>
			</div>
		</div>) 
	}

	return (
		<div key={i} className={`${styles.container} `}>
			<h4> {d["title"]}</h4>	
			<div className={`${styles.subcontainer} `}>
				<p> {toString(d["기간"])} </p>
			</div>
			<div className={`${styles.taglist}`}> 
				{
					Array.isArray(d["Tag"]) && d["Tag"].map((d, i) => <Tag key={i} name={d} className={`${styles.tag}`} />)	
				}
			</div>
		</div>) 
}