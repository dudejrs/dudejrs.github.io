import * as d3 from "d3"

const data_ = [{ 
		a : 100,
		b : 200,
		c : 300,
		d : 400,
		e : 500
	},{ 
		a : 500,
		b : 400,
		c : 300,
		d : 200,
		e : 100
	}];

function getValues(data, keys){
	let ret = []

	for(let key of keys){
		ret.push(data[key])
	}

	return ret
}

function calculateRadius(width, height, margin){
	return (Math.min((width - margin.top + margin.bottom),( height - margin.left + margin.right)))/2;
}

function getUnit(n){
	let ret = 1;

	while(n / 10 > 1){
		n /= 10
		ret *= 10
	}

	return ret;
}

function calculateTicks(data, ntick, lower){

	const keys = Object.keys(data[0])

	const max = Math.max(...data.map(d=> Math.max(...getValues(d, keys))));
	const unit = getUnit(max)

	const upper = unit * Math.ceil(max / unit)
	const interval = Math.floor((upper - lower) / (ntick - 1))


	let ret = []
	let cur = lower;
	while( upper > cur){
		ret.push(cur)
		cur += interval
	}

	ret.push(upper)

	return ret;
}

function getVertexes(cx, cy, angles, radius){
	return angles.map(angle => {
		return  {
				"x" : cx + radius * Math.cos(angle),
				"y" : cy +radius * Math.sin(angle)
				}
	})
}

function getCoord(data, keys, cx, cy, angles, radiusFunc){

	let values = getValues(data, keys);

	return values.map( (v,i) => {
		return {
				"x" : cx + radiusFunc(v) * Math.cos(angles[i]),
				"y" : cy + radiusFunc(v) * Math.sin(angles[i])
		}
	});
}

export default function({width, height, data = data_, 
		lower = 0, ntick = 5, margin={top: 0, right:0, left: 0, bottom: 0},
		colorFunc, colors
	}){

	const keys = Object.keys(data[0])
	const radius = calculateRadius(width, height, margin);
	const ticks = calculateTicks(data, ntick, lower)


	const angles = Array.from(Array(5).keys()).map((i) => (Math.PI / 2) + (2 * Math.PI * i / keys.length))
	

	const radiusFunc = d3.scaleLinear()
						.domain([0, ticks[ticks.length-1]])
						.range([0, radius * 0.925])
	const lineFunc = d3.line()
						.x(d => d.x)
						.y(d => d.y)

	const vertexes = getVertexes(width/2, height/2, angles, radius * 0.925);
	const vertexes_ = getVertexes(width/2, height/2, angles, radius);

	const coords = data.map(d => getCoord(d, keys, width/2, height/2, angles, radiusFunc))

	if (!colors && !colorFunc){
		colorFunc = d3.scaleOrdinal(d3.schemeTableau10)
	}

	if(colors && !colorFunc){
		colorFunc = (i)=>{
			return colors[i]
		}
	}

	return (
		<svg width={width} height={height}>
			<g transform={`translate(${margin.left},${margin.top})`}>
				{
					vertexes.map(vertex => (<line x1={width/2} y1={height/2} x2={vertex.x} y2={vertex.y} stroke={'black'} srotkeWidth={'1.5'} opacity={0.3}/>)) 
				}
				{
					ticks.map(tick => (<circle cx={width/2} cy={height/2} r={radiusFunc(tick)} fill={'None'} stroke={'black'} opacity={0.3} />))
				}
				{
					coords.map((d, i)=> (<path  class={'araPath'} d={lineFunc(d)} strokeWidth={1.5} fill={colorFunc(i)} opacity={0.4}/>))
				}
				{
					ticks.map((tick) => (<text x={width/2 + 5} y={height/2-radiusFunc(tick)} textAnchor={'start'} fill={'black'} fontSize={`0.7em`}> {tick}</text>))
				}
				{
					vertexes_.map((vertex,i) => (<text x={vertex.x} y={vertex.y} textAnchor={'middle'} fill={'black'}> {keys[i]}</text>) )
				}
			</g>
		</svg>
	);
}