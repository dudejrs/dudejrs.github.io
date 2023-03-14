
import loadMapStyles from './loadmap.module.css';
import styles from './trackNav.module.css'


export default function TrackNav({track, onClick}) {
	
		const titles = ["JavaScript","Java","DBMS","Backend","DevOps","Data Scientist", "Graphic"];

	return (
			<ul className={styles.trackNav}>
				<li><img src="img/loadmap/mac_icon.png" className={`${styles.img} ${styles.trackNavCloseTap} `}/></li>
				{
					titles.map(title =>{
						let style = `${styles.trackNavItem} `;
						if (track && title == track)
							style += `${styles.bold}`
						return (<li className={style} onClick={()=>onClick(title)}>{title}</li>);
					})
				}
				
			</ul>
		);
}