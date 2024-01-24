
import {useState, useEffect} from 'react'

import * as d3 from "d3";


function getX(type, axis, data, margin, width){
	if(axis && axis.length){
		switch(type){
			case 'time': 
				return d3.scaleTime([new Date(axis[0]), new Date(axis[axis.length-1])],[margin.left, width-margin.right])
			default :
		}
	}

	return d3.scaleLinear([0, data.length-1], [margin.left, width-margin.right]);
}

export default function ({data, type, axis, width, height, margin, children, color,
		pointRadius = 2.5
	}){

	if(!color){
		color = "#565656"
	}

	if(!axis){
		axis = [...Object(Array(data.length)).keys()]
	}

	const x = getX(type, axis, data, margin, width);
	const y = d3.scaleLinear(d3.extent(data), [height-margin.bottom, margin.top]);
	
	const line = d3.line((d,i) => x(axis[i]),y);

	return (
		<svg width={width} height={height}>
			<path fill="none" stroke={color} stroke-width="1.5" d={line(data)} />
			<g fill={color} stroke= {color} stroke-width="1.5">
				{data.map((d,i) => (<circle key={i} cx={x(axis[i])} cy={y(d)} r={pointRadius}/>))}
			</g>
			{children}
		</svg>
		);
}