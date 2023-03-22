
import NotionContainer from './notion/notionContainer'

import styles from './trackDetailView.module.css';


export default function trackDetailView({name, onClick}){
	return(
		<div className={styles.container}>

			<div className={styles.navigation}>
				<img src="img/loadmap/mac_icon2.png" onClick={()=>{onClick(false)}} />
				<span>{name}</span>
			</div>
			<NotionContainer name={name} styles={styles.content}/>

		</div>);
}