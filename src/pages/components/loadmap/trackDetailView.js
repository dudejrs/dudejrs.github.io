
import NotionContainer from './notion/notionContainer'
import {Modal} from '../../../components'

import styles from './trackDetailView.module.css'


export default function trackDetailView({name, onClick}){
	return(
			<Modal name={name} className={`${styles.container}`} childClassName={`${styles.childContainer}`} onClick={()=>{onClick(false)}}>
				<NotionContainer name={name}/>
			</Modal>
		);
}