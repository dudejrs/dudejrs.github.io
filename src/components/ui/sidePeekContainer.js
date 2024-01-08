import {useEffect, useState, useCallback} from 'react';

import SidePeek from './sidePeek';
import styles from './sidePeekContainer.module.css'



export default function SidePeekContainer({ id, className, children, sideContent, active, close}) {

	return (
			<div className={`${styles.container} `+ className} id={id}>  
				{children}
				{ active &&  <SidePeek close={close}>{sideContent}</SidePeek> }
			</div>
		);
}