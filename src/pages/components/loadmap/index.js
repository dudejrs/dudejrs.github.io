import {useState, useEffect, useCallback} from 'react';

import styles from './loadmap.module.css';

import TrackList from './tracklist'
import TrackNav from './trackNav'
import TrackDetailView from './trackDetailView'


export default function Loadmap({className, trackListMap, trackLists, updateDate }) {
	
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
			<div id="load-map" className={`${className} ${styles.section}`}>  
				<h4>Loadmap</h4>

				<div className={styles.container}>
					<TrackNav title={trackList} onClick={setTrackList} trackLists={trackLists} />
					<div className={styles.content}>
						<TrackList	title={trackList} tracks={trackListMap[trackList]} onClick={openDetailView}/>
						{ isOpened ? <TrackDetailView name={track} onClick={setIsOpend}/> : <></>}
					</div>
					<div className={styles.footer}>update : {updateDate}</div>
				</div>

			</div>
		);
}