import TestComponent from '../../../components/test.js'
import loadmapStyles from './loadmap.module.css';
import styles from './tracklist.module.css'

export default function TrackList({title, tracks, onClick}){
	
	return (
			<>  
				<ul className={styles.trackline}>

					{
						tracks.map((track, index)=>
							(<li key={index}> 
								<a href="/info#load-map" className={styles.track} onClick={()=>{onClick(track);}}>
									<img src="img/loadmap/folder.png" className={styles.trackImg}/>
									<TestComponent> <span className={styles.trackName}>{track}</span> </TestComponent> 
								</a>
							</li>))
					}
				</ul>
			</>
		);
}