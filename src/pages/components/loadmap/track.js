import styles from './tracklist.module.css'

function Folder({count, img}){
	return (
		<div className={styles.folder}>
			{ count > 0 && <div className={styles.badge}>{count}</div> }
			<img src={img} className={styles.trackImg}/>
		</div>
		)
}

function Component({count, children, onClick, track}) {

	if (count > 0) {
		return(
			<a href="/info#load-map" className={styles.track} onClick={()=>{onClick(track);}}>
				<Folder img={"img/loadmap/folder.png"} count={count}/>
				{children}
			</a>)
	}

	return(	
			<div className={`${styles.track} ${styles.empty_track}`}>
				<Folder img={"img/loadmap/empty_folder.png"} count={count}/>
				{children}
			</div>
		);
}


export default function({count = Math.floor(Math.random() * 3), track, onClick}){
	
	return (
		<li > 
			<Component count={count} track={track} onClick={onClick}>
				<span className={styles.trackName}>{track}</span>
			</Component>
		</li>
		);
} 