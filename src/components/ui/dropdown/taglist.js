import {useState, useEffect} from 'react'

import Tag from '../tag'

import styles from './taglist.module.css'

export default function({ names, defaults=[], onTagClick }){

	return (
	<div className={`${styles.container}`}>
		{ names.map((name, i) => 	
			<Tag name={name} key={i} onClick={(e)=> {
				onTagClick && onTagClick(name)}
			}/>
		)}	
	</div>
	);
}