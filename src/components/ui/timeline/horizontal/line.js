
export default function({
	width = 1912,
	height = 18,
	stroke = 6,
	color = '#302eff',
	children
}){
	return (
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
				<g fill={"none"} stroke={color} strokeWidth={`${stroke}px`}>
					<line y1={height / 2} x2={width} y2={height / 2}/>
				</g>
				{
					children
				}
			</svg>
		</div>
		);
}