import {Legend} from '../../../../components/chart';

export default function({items, height, colors, rem, className}){
	return (
			<Legend descriptions={items} height={height} colors = {colors} className={className} rem={rem} />
		);
}