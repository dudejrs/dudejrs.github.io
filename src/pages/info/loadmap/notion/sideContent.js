import styles from './notionContainer.module.css'

export default function SideContent({children}){
	return (
		<div className={styles.subcontent}>
			
			{children}
		</div> 
		);
}