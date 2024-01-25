
import {useState} from 'react'

import TooltipTextBubble from './tooltipTextBubble'

import styles from './tooltip.module.css'

export default function ({className, children,
			widthpx="100px", heightpx="100px",
			size="1.2rem", 
			color="#aaa", position="right", 
	}) {

	let [clicked, setClicked] = useState(false);

	return (
		<div className={`${styles.container} ${className} ${clicked ? styles.clicked : ''}`} onClick={()=>setClicked(!clicked)}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.13 18.13" width={size} height={size} >
				<g>
					<path  className={`${styles.iconText}`} d="M8.3,6.08V4.56H9.83V6.08Zm0,7.49V7.06H9.82v6.51Z" fill={color}/>
					<circle className={`${styles.icon}`} cx="9.07" cy="9.07" r="7.5" stroke={color} />
				</g>
			</svg>
			{
				clicked ? (
				<TooltipTextBubble width={widthpx} height={heightpx} position={position}>
					{children}
				</TooltipTextBubble>
				) : (<></>)
			}
		</div>
		);
}