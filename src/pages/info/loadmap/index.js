
import infoStyles from '../../info.module.css';
import styles from './loadmap.module.css';

import JavaScript from './tracks/javascript';
import Java from './tracks/java';
import Backend from './tracks/backend';
import DataScientist from'./tracks/data_scientist';
import DBMSAdministrator from './tracks/dmbs_administrator';
import DevOps from './tracks/devops';
import Graphic from './tracks/graphic'

export default function Loadmap() {
	
	return (
			<div id="load-map" className={`${infoStyles.section} ${styles.container}`}>  
				<h4>Loadmap</h4>
				<JavaScript />
				<Java />
				<DBMSAdministrator />
				<Backend />
				<DevOps />
				<DataScientist />
				<Graphic />

			</div>
		);
}