import * as d3 from "d3"

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

function calculateTicks(data, ntick, lower, upper){

	const keys = Object.keys(data[0])

	if(upper == 0){
		const max = Math.max(...data.map(d=> Math.max(...getValues(d, keys))));
		const unit = getUnit(max)

		upper = unit * Math.ceil(max / unit)
	}
	const interval = Math.max(Math.floor((upper - lower) / (ntick - 1)), 1)

	let ret = []
	let cur = lower
	for(let i=0; i<ntick; i++){	
		ret.push(cur)
		cur += interval
	}

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

function getCoord(data, keys, cx, cy, angles, radiusFunc, maxRadius){

	let values = getValues(data, keys);


	return values.map( (v,i) => {
		let r = Math.min(radiusFunc(v), maxRadius);

		return {
				"x" : cx + r * Math.cos(angles[i]),
				"y" : cy + r * Math.sin(angles[i])
		}
	});
}

function bisect(func, target){

	let mid;
	let lo = 0, hi =1;

	for(let i=0; i<100; i++){
		mid = (lo+hi)/2;
		if (func(mid) > target){
			hi = mid
		} else {
			lo = mid
		}
	}

	return hi
}

export default function({width, height, 
		data, ticks,
		lower = 0, upper=0, ntick=5, margin={top: 0, right:0, left: 0, bottom: 0},
		colorFunc, colors, lineColor = 'black', tickColor = 'black',
		ratio = 0.8, textRatio = 0.9, 
		keyColor = 'black'
	}){

	const keys = Object.keys(data[0])
	const radius = calculateRadius(width, height, margin);
	
	if(!ticks){
		ticks = calculateTicks(data, ntick, lower, upper)
	}

	const angles = Array.from(Array(keys.length).keys()).map((i) => (Math.PI / 2) + (2 * Math.PI * i / keys.length))
	

	const interpolateFunc = d3.piecewise(ticks)
	const positionFunc =  v => bisect(interpolateFunc, v)
	const linear = d3.scaleLinear()
			.range([0, radius * ratio * 0.9])

	const radiusFunc =  v => {
		return linear(positionFunc(v));
		}


	const lineFunc = d3.line()
						.x(d => d.x)
						.y(d => d.y)

	const vertexes = getVertexes(width/2, height/2, angles, radius * ratio);
	const vertexes_ = getVertexes(width/2, height/2, angles, radius * textRatio);

	const coords = data.map(d => getCoord(d, keys, width/2, height/2, angles, radiusFunc, radius * ratio))


	if (!colors && !colorFunc){
		colorFunc = d3.scaleOrdinal(d3.schemeTableau10)
	}

	if(colors && !colorFunc){
		colorFunc = (i)=>{
			return colors[i % colors.length]	
		}
	}

	coords[0].push({...coords[0][0]})

	return (
		<svg width={width} height={height}>
			<g transform={`translate(${margin.left},${margin.top})`}>
				{
					vertexes.map((vertex,i) => (<line x1={width/2} y1={height/2} x2={vertex.x} y2={vertex.y} stroke={lineColor} strokeWidth={'0.5'} opacity={0.5} key={i} />)) 
				}
				{
					ticks.map((tick, i) => (<circle cx={width/2} cy={height/2} r={radiusFunc(tick)} fill={'None'} stroke={lineColor} opacity={0.5} key={i}/>))
				}
				{
					coords.map((d, i)=> (<path  d={lineFunc(d)} stroke={"None"} fill={colorFunc(i)} opacity={0.5} key={i}/>))
				}
				{
					coords.map((d, i)=> (<path d={lineFunc(d)} stroke={colorFunc(i)} strokeWidth={1} fill={'None'} opacity={0.8} key={i}/>))
				}
				{
					ticks.map((tick, i ) => (<text x={width/2 + 5} y={height/2-radiusFunc(tick)} textAnchor={'start'} fill={tickColor} fontSize={`0.7em`} key={i}> {tick}</text>))
				}
				{
					vertexes_.map((vertex,i) => (<text x={vertex.x} y={vertex.y} textAnchor={'middle'} fill={keyColor} key={i} fontSize={`0.8em`} fontWeight={'700'}> {keys[i]}</text>) )
				}
			</g>
		</svg>
	);
}