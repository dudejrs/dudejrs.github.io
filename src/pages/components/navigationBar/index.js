import {NavLink} from 'react-router-dom';
import styles from './index.module.css';
import Contact from './contact';
import Name from './name';

export default function NavigationBar({navigationList}){
	
	return (
		<div className={styles.container}>
			<Name />
			<div className={styles.links}>
				{
					Array.isArray(navigationList) && navigationList.map((item, i)=>
						(<NavLink to={`${item.link}`} key={i} className={({isActive})=> isActive? `${styles.active}`: ''}> {item.name} </NavLink>)
					)
				}
			</div>
			<Contact />
		</div>
	);
}