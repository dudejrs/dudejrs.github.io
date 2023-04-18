import {useState, useEffect, useCallback} from 'react';

import infoStyles from '../../info.module.css';
import styles from './loadmap.module.css';

import TrackList from './tracklist'
import TrackNav from './trackNav'
import TrackDetailView from './trackDetailView'


const trackListMap = {
	"Javascript" : ["Javascript","Node.js","React.js", "Next.js"],
	"Java" : ["Java","Spring Boot", "Spring", "JPA", "Spring WebFlux"],
	"DBMS" : ["SQL","Oracle","MySQL", "MongoDB", "GraphQL"],
	"Backend" : ["Basic", "Backend", "Kafka", "Redis"],
	"DevOps" : ["Linux", "Docker", "Kubernetices", "AWS"],
	"Data Science" : ["Python","Data Science"],
	"Graphics" :["OpenGL", "WebGL", "Three.js", "D3.js"]
}

const trackLists = ["Javascript","Java","DBMS","Backend","DevOps","Data Science", "Graphics"];

export default function Loadmap() {
	
	const [trackList, setTrackList] = useState("Javascript");
	const [track, setTrack] = useState("");
	const [isOpened, setIsOpend] = useState(false);

	useEffect(()=>{
	},[track])

	const openDetailView = useCallback((title, makeOpen)=>{
		setTrack(title);
		setIsOpend(true);
	},[track, isOpened]);

	
	return (
			<div id="load-map" className={`${infoStyles.section} ${styles.section}`}>  
				<h4>Loadmap</h4>

				<div className={styles.container}>
					<TrackNav title={trackList} onClick={setTrackList} trackLists={trackLists} />
					<div className={styles.content}>
						<TrackList	title={trackList} tracks={trackListMap[trackList]} onClick={openDetailView}/>
						{ isOpened ? <TrackDetailView name={track} onClick={setIsOpend}/> : <></>}
						
						
					</div>
				</div>

			</div>
		);
}