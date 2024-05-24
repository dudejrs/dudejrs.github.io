import styles from './accordian.module.css'


function Upper({width="1rem", color= "#b6b6b6"}) {
	return <div width={width}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.98 47.46" width={width}>
			<path d="M81.22,37.2,45.73,1.72a6.08,6.08,0,0,0-8.48,0L1.77,37.2c-5.47,5.47,3,14,8.48,8.49L45.73,10.21H37.25L72.73,45.69c5.47,5.47,14-3,8.49-8.49Z" fill={color}/>
		</svg>
		</div>
}

function Lower({width="1rem", color = "#b6b6b6"}) {
	return <div width={width}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.98 47.46" width={width}>
			<path d="M1.78,10.27,37.27,45.75a6.07,6.07,0,0,0,8.48,0L81.23,10.27c5.47-5.47-3-14-8.48-8.49L37.27,37.26h8.48L10.27,1.78C4.8-3.69-3.73,4.78,1.78,10.27Z" fill={color}/>
		</svg>
		</div>
}

export default function({active, header, children, onClick, style, headerStyle, ...args}) {
	return (
		<div style={{maxHeight : "200px", ...style}} className={`${styles.container}`} {...args}> 
			<div className={`${styles.header}`} onClick={onClick} style={headerStyle}> 
				<div>{header}</div>
				{active ? <Upper /> : <Lower /> }
			</div>
			{active && children}
		</div>)
}