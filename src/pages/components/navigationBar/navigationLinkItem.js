import {NavLink} from 'react-router-dom';
import {useCallback} from 'react';

import styles from './index.module.css';

export default function NavigationLinkItem({item, i, onMouseOver, onMouseOut}){
	
	const onMouseOver_ = useCallback(()=>{
		if(onMouseOver) 
			onMouseOver(item.sublist);
	});

	const onMouseOut_ = useCallback(()=>{
		if(onMouseOut)
			onMouseOut();
	})
	

	return (<NavLink 
				to={`${item.link}`} 
				key={i} 
				className={({isActive})=> isActive ? 
				`${styles.active}`: ''}
				onMouseOver={onMouseOver_}
				onMouseOut={onMouseOut_}

				> 

					{item.name} 

			</NavLink>				
	);
}