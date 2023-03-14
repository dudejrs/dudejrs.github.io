import {useState, useEffect} from 'react';

import infoStyles from '../../info.module.css';
import styles from './loadmap.module.css';

import Track from './track'
import TrackNav from './trackNav'


const tracklistMap = {
	"JavaScript" : ["JavaScript","Node.js","React.js", "Next.js"],
	"Java" : ["Spring Boot", "Spring", "JPA"],
	"DBMS" : ["SQLD","MySQL", "MongoDB", "GraphQL", "SQLP"],
	"Backend" : ["Kafka", "Redis"],
	"DevOps" : ["리눅스 마스터 1급", "Doker", "Kubernetices", "AWS자격증", "Lpic자격증"],
	"Data Scientist" : ["ADsP","빅데이터 분석기사"],
	"Graphic" :["OpenGL", "WebGL", "Three.js", "D3.js"]
}

export default function Loadmap() {
	
	const [track, setTrack] = useState("JavaScript");

	useEffect(()=>{
		console.log('hello');
	},[track]);
	
	return (
			<div id="load-map" className={`${infoStyles.section} ${styles.section}`}>  
				<h4>Loadmap</h4>

				<div className={styles.container}>
					<TrackNav track={track} onClick={setTrack} />
					<div className={styles.content}>
						<Track	title={track} tracks={tracklistMap[track]} />
						{/*<NotionContainer />*/}
						
					</div>
				</div>

			</div>
		);
}