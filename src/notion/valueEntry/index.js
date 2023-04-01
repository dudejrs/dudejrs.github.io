
import Select from './select';
import Multiselect from './multiselect';
import Checkbox from './checkbox';


const mapToComponent = ( type, data )=>{
	
	if(type == "multiselect")
		return (< Multiselect data={data} />);
	if(type == "checkbox")
		return (<Checkbox data={data} />);
	if(type == "date")
		return (<>{data.start}</>);
	if(type == "select")
		return (<Select data={data}/>);
	else 
		return (<>{data}</>);
}


export default function ValueEntry({data, className, type, style}){
	

	return(
		<div className={` ${className}`} style={style}>
		{
			mapToComponent(type, data)
		}
		</div>
	);
}