
import Select from './select';
import Multiselect from './multiselect';
import Checkbox from './checkbox';
import Status from './status'

import styles from './index.module.css'

function date(data) {
	if (Object.keys(data).length == 0) {
		return ""
	}

	if (data["start"] && data["end"]) {
		return `${data["start"].slice(0,10)} ~ ${data["end"].slice(0,10)}`
	}
	if (data["start"]) {
		return data["start"].slice(0,10)
	}
	if (data["end"]) {
	 data["end"].slice(0, 10)
	}

	return ""
}

const mapToComponent = (type, data)=>{
	if (!data)
		return (<></>)
	if (type == "multiselect")
		return (< Multiselect data={data} />);
	if (type == "checkbox")
		return (<Checkbox data={data} />);
	if (type == "date")
		return (<>{date(data)}</>);
	if (type == "select")
		return (<Select data={data}/>);
	if (type == "status") 
		return (<Status data={data}/>);
	else
		return (<>{data}</>);
}

export default function ValueEntry({data, className, type, style, wrap=false, lineStyle}){
	

	return(
		<div className={`${styles.container} ${className} ${wrap? styles.wrap :'' }`} style={{ borderRight: lineStyle, ...style}}>
		{
			mapToComponent(type, data)
		}
		</div>
	);
}