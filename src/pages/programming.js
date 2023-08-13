
import styles from './programming.css'
import * as d3 from "d3";

	
const data = [1,2,3,4,5,6,7,8,9,10]

const width = 400;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 20;
const marginLeft = 20;

export default function Programming(){

	const x = d3.scaleLinear([0, data.length-1], [marginLeft, width-marginRight]);
	const y = d3.scaleLinear(d3.extent(data), [height-marginBottom, marginTop]);
	const line = d3.line((d,i) => x(i),y);

	return (
		<div>
			<svg width={width} height={height}>
				<path fill="none" stroke="red" stroke-width="1.5" d={line(data)} />
				<g fill="black" stroke= "black" stroke-width="1.5">
					{data.map((d,i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5"/>))}
				</g>
			</svg>
		</div>
		);
}