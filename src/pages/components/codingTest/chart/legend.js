
import {Legend} from '../../../../components/chart';


export default function({items, colors, rem, className}){
	return (
			<Legend descriptions={items} colors = {colors} className={className} rem={rem} />
		);
}