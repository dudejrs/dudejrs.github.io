import loadmapStyles from './loadmap.module.css';

import Track from './track'
import styles from './tracklist.module.css'

export default function TrackList({title, tracks, onClick}){
	
	return (
			<>  
				<ul className={styles.trackline}>
					{
						tracks.map((track, index)=>
							(<Track key={index} track={track} onClick={onClick}/>))
					}
				</ul>
			</>
		);
}