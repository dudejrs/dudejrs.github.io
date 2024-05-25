import styles from './index.module.css'

export default function({size= 100, _size = 176.14, backgroundColor= 'black', color='white', onClick, style}) {

	return (
		<div className={styles.button} onClick={onClick} style={style}> 
		<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${_size} ${_size}`} width={size} height={size}>
			<circle cx={_size/2} cy={_size/2} r={_size/2} fill={backgroundColor}/>
			<path d="M104.74,46.07,54.28,82.36c-3.84,2.77-3.82,7.59,0,10.36l51.52,37.34c6.26,4.54,12.25-5.86,6-10.36L60.34,82.36V92.72L110.8,56.43C117,52,111,41.55,104.74,46.07Z" fill={color}/>
		</svg>
		</div>
		)

}