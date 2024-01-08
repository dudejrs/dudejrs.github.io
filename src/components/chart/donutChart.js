
import * as d3 from "d3";


export default function({className, children, data, width, height, radius, color}){
	
	if (!color){
		color = d3.scaleOrdinal(d3.schemeTableau10)
	}

	const arc = d3.arc()
				.innerRadius(radius * 0.67)
				.outerRadius(radius);

	const pie = d3.pie()
				.padAngle(3*1/radius)
				.sort(null)


	return (
		<svg className={`${className}`} width={width} height={height}>
			<g transform={`translate(${width/2}, ${height/2})`} >
				{
					pie(data).map((d,i) => (<path key={i} fill={color(i)}  d={arc(d)} />))
				}
			</g>

			{children}
		</svg>
	);
}