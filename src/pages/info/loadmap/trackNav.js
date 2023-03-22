
import loadMapStyles from './loadmap.module.css';
import styles from './trackNav.module.css'


export default function TrackNav({title, onClick}) {
	
		const trackLists = ["Javascript","Java","DBMS","Backend","DevOps","Data Scientist", "Graphic"];

	return (
			<ul className={styles.trackNav}>
				<li><img src="img/loadmap/mac_icon.png" className={`${styles.img} ${styles.trackNavCloseTap} `}/></li>
				{
					trackLists.map(t =>{
						let style = `${styles.trackNavItem} `;
						if (title && t == title)
							style += `${styles.bold}`
						return (<li key={t} className={style} onClick={()=>onClick(t)}>{t}</li>);
					})
				}
				
			</ul>
		);
}