
import {useState} from 'react'

import TooltipTextBubble from './tooltipTextBubble'

import styles from './tooltip.module.css'

export default function () {
	return (
		<div className={`${styles.container}`} >
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.13 18.13" width={"1.5rem"} height={"1.5rem"} >
				<g>
					<path d="M8.3,6.08V4.56H9.83V6.08Zm0,7.49V7.06H9.82v6.51Z"/>
					<circle class={styles.icon} cx="9.07" cy="9.07" r="7.5"/>
				</g>
			</svg>
			<TooltipTextBubble width={"120px"} height={"100px"} position={"bottom"}>
				<div>Hello World</div>
			</TooltipTextBubble>
		</div>
		);
}