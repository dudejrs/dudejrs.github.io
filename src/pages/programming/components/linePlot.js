
import {useState, useEffect} from 'react'

import * as d3 from "d3";


export default function Programming({data, width, height, margin, children}){

	const x = d3.scaleLinear([0, data.length-1], [margin.left, width-margin.right]);
	const y = d3.scaleLinear(d3.extent(data), [height-margin.bottom, margin.top]);
	const line = d3.line((d,i) => x(i),y);

	return (
		<div>
			<svg width={width} height={height}>
				<path fill="none" stroke="red" stroke-width="1.5" d={line(data)} />
				<g fill="black" stroke= "black" stroke-width="1.5">
					{data.map((d,i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5"/>))}
				</g>
				{children}
			</svg>
		</div>
		);
}