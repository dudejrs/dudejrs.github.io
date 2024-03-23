
import {NavLink} from 'react-router-dom'

import styles from './layout.module.css'

export default function({programmingLanguages, title, children}) {

	const className = ({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`

	return (
		<div className={`${styles.container}`}>
			<h1 className={`${styles.title}`}> {title}</h1>
			<div className={`${styles.nav}`}>
				<NavLink className={`${styles.navItem}`} to="/practice" >전체</NavLink>
				{
					programmingLanguages.map((lang,i) => (<NavLink className={className} to={`/practice/${i}`}>{lang}</NavLink>))
				}
			</div>
			{
				children
			}
		</div>
	)
}