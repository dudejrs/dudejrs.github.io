import Color from '../../components/color'
import styles from './status.module.css'

function getColor(data) {

	if (["Done", "Quit", "Suspend"].includes(data)) {
		return Color.getColorBy("Done")
	}

	if (["In progress"].includes(data)) {
		return Color.getColorBy("In progress")
	}

	if (["Not started"].includes(data)) {
		return "#666"
	}

	return Color.getColorBy(data)
}

export default function ({data}) {
	return <div className={`${styles.container}`} style={{backgroundColor : getColor(data)}}>
		<div className={`${styles.circle}`}></div>
		<span > {data} </span>
	</div>
}