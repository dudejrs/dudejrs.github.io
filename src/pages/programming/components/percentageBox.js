
import * as d3 from "d3";

export default function ({children, data, className, width, height}){
	
	// const x = d3.scaleLinear()
	// 		.domain([d3.min(data), d3.max(data)])
	// 		.range([0, width])

	return (
		<svg className={`${className}`}>
			{children}
		</svg>
	);
}