
import styles from './download.module.css'

export default function({onClick, color = 'white', backgroundColor='rgb(26, 115, 233)'}){
	return (
		<div className={styles.container} onClick={onClick}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.6 231.6" width={`5rem`} height={`5rem`} >
				<g>
					<circle fill = {backgroundColor} className={`${styles.icon}`} cx="115.8" cy="115.8" r="115.8"/>
					<g fill={color}>
					<path d="M109.8,60.4v82.23c0,7.72,12,7.74,12,0V60.4c0-7.72-12-7.74-12,0Z" />
					<path d="M152.67,97.27l-41.11,41.12H120L78.92,97.27c-5.46-5.47-14,3-8.48,8.49l41.12,41.11a6.07,6.07,0,0,0,8.48,0l41.12-41.11c5.47-5.47-3-14-8.49-8.49Z"/>
					<path d="M82.48,177.2h66.64c7.72,0,7.73-12,0-12H82.48c-7.72,0-7.73,12,0,12Z"/>
					</g>
				</g>
			</svg>
		</div>
		);
}