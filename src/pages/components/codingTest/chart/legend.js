
import {Legend} from '../../../../components/chart';


export default function({items, colors, rem, className}){
	return (
		<div>
			<Legend descriptions={items} colors = {colors} className={className} rem={rem} />
		</div>
		);
}