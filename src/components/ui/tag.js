
import styles from './tag.module.css'
import Color from '../color'

export default function Tag({name, className, onClick}) {
	return (
		<div className={`${styles.tag} ${className ? className : ''}`} style={{backgroundColor : `${Color.getColorBy(name)}`}} onClick={onClick}>
		{ name }
		</div>
	)
}