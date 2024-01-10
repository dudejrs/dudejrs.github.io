
import styles from "./tooltipTextBubble.module.css"


function TooltipTop({width, height, children}){

	const tailHeight = 12;
	const tailWidth = 25;
	const boxHeight = height * 1.396083;
	const totalWidth = width * 2.0075;
	const totalHeight = boxHeight + tailHeight;

	return (
			<div className={`${styles.container}`} style={{top : `-0.8rem`, left : `0.75rem`, transform: `translate(-${width/2}px, -${height*0.7}px)`, width : `${width}px`} }>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${totalWidth} ${totalHeight}`} class={styles.bubble} width={`${width}px`} >
					<g>
						<rect width={totalWidth} height={boxHeight} rx="30"/>
						<polygon points={`${totalWidth/2} ${totalHeight} ${totalWidth/2} ${totalHeight} ${totalWidth/2 - tailWidth/2} ${boxHeight-1} ${totalWidth/2 + tailWidth/2} ${boxHeight-1} ${totalWidth/2} ${totalHeight}`}/>
					</g>
				</svg>
				<div style={{position : 'absolute',  top : 0, width : `${width}px`, height : `${height * 0.70}px`, padding : '0.5rem', boxSizing : "border-box"}}>
					{children}
				</div>
			</div>
		);
}

function TooltipRight({width, height, children}){


	const totalWidth = width * 1.86883;
	const totalHeight = height * 1.44;

	const tailWidth = 12;
	const tailHeight = 25

	const boxWidth = width * 1.6729 * 0.93 * 0.97;
	const boxHeight = totalHeight;

	return (
		<div className={`${styles.container}`} style={{top : `0.75rem`, right : 0, transform: `translate(${width}px, -${height/2}px)`, width : `${width}px`} }>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${totalWidth} ${totalHeight}`} class={styles.bubble} height={`${height}px`}>
				<g>
					<rect x={tailWidth} width={boxWidth} height={boxHeight} rx="30"/>
					<polygon points={`0 ${totalHeight/2} 0 ${totalHeight/2} ${tailWidth+1} ${totalHeight/2 - tailHeight/2} ${tailWidth+1} ${totalHeight/2 + tailHeight/2} 0 ${totalHeight/2}`}/>
				</g>
			</svg>
			<div style={{position : 'absolute',  top : 0, left : `13px`, width : `${width * 1.05}px`, height : `${height}px`, padding : '0.5rem', boxSizing : "border-box"}}>
					{children}
			</div>
		</div>
		);
}

function TooltipLeft({width, height, children}){

	const totalWidth = width * 1.86883;
	const totalHeight = height * 1.44;

	const tailWidth = 12;
	const tailHeight = 25

	const boxWidth = width * 1.6729 * 0.93 * 0.97;
	const boxHeight = totalHeight;

	return (
		<div className={`${styles.container}`} style={{top : `0.75rem`, left : `-0.25rem`, transform: `translate(-${width}px, -${height/2}px)`, width : `${width}px`} }>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${totalWidth} ${totalHeight}`} className={`${styles.bubble}`} height={`${height}px`}  style={{transform : `translate(-23.5%,0)`}}>
				<g>
					<rect x={totalWidth-boxWidth-tailWidth} width={boxWidth} height={boxHeight} rx="30"/>
					<polygon points={`${totalWidth} ${totalHeight/2} ${totalWidth} ${totalHeight/2} ${totalWidth-tailWidth} ${totalHeight/2 - tailHeight/2} ${totalWidth-tailWidth} ${totalHeight/2 + tailHeight/2} ${totalWidth} ${totalHeight/2}`}/>
				</g>
			</svg>
			<div style={{position : 'absolute',  top : 0, right : '13px', width : `${width * 1.03}px`, height : `${height}px`, padding : '0.5rem', boxSizing : "border-box"}}>
				{children}
			</div>
		</div>
		);
}


function TooltipBottom({width, height, children}){

	const tailHeight = 12;
	const tailWidth = 25;
	const boxHeight = height * 1.396083;
	const totalWidth = width * 2.0075;
	const totalHeight = boxHeight + tailHeight;

	return(
		<div className={`${styles.container}`} style={{bottom : 0, left : '0.75rem', transform: `translate(-${width/2}px, ${height}px)`, height : `${height}px`} }>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${totalWidth} ${totalHeight}`} className={`${styles.bubble}`} width={`${width}px`}>
				<g>
					<rect y={tailHeight} width={`${totalWidth}`} height={`${boxHeight}`} rx="30"/>
					<polygon  points={`${totalWidth/2} 0 ${totalWidth/2} 0 ${totalWidth/2-tailWidth/2} ${tailHeight} ${totalWidth/2 + tailWidth/2} ${tailHeight} ${totalWidth/2} 0`}/>
				</g>
			</svg>
			<div style={{position : 'absolute',  top : 0, width : `${width}px`, height : `${height * 0.70}px`, padding : '0.5rem', boxSizing : "border-box"}}>
				{children}
			</div>
		</div>
		)
}



export default function({width, height, children, position}){


	const widthpx = width.split('px')[0];
	const heightpx = height.split('px')[0];

	if(widthpx == 0 || heightpx == 0){
		return (<div></div>)
	}


	if(position == "top"){
		return (<TooltipTop width={widthpx} height={heightpx} children={children} />)
	}

	if(position == "left"){
		return (<TooltipLeft width={widthpx} height={heightpx} children={children}/>)
	}

	if(position == "bottom"){
		return (<TooltipBottom width={widthpx} height={heightpx} children={children}/>)
	}

	return (<TooltipRight width={widthpx} height={heightpx} children={children} />);
}

