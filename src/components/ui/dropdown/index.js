import {useEffect, useState} from 'react'

import Popup from './popup'

import styles from './index.module.css'

export default function({width='100%', content, children, className, clicked=false}){

	const [clicked_, setClicked] = useState(false)
	
	return (
		<div className={`${styles.container} ${className}`} style={{width : width}} onClick={()=>setClicked(true)}>
			{
				content
			}
			{
				clicked_ && <Popup content={content} setClicked={setClicked}>{children}</Popup>
			}
		</div>
		);
}