import styles from './legend.module.css'


function pickerStyle(color, rem){
	return {
		backgroundColor : color,
		width : `${rem}rem`,
		height : `${rem}rem`,
		borderRadius : `${rem/2}rem`,
		margin : `0 ${rem}rem 0 ${rem/2}rem`
	};
}

function itemStyle(rem){
	return {
		margin:`${rem/2}rem 0`,
		fontSize : `${rem >0.8 ? rem : 0.8}rem`
	}
}


export default function Legend({className, descriptions, colors, rem}){

	if (!rem){
		rem = 0.8;
	}

	console.log(rem)


	return (
		<div className={className}>
			{
				descriptions && descriptions.map((item, index)=> 
					<div className={`${styles.item}`} key={index} style={itemStyle(rem)}> 
						<div className={`${styles.picker}`} style={pickerStyle(colors[index], rem)}></div>
						{item}
					</div>
					)
			}
		</div>
		);
}