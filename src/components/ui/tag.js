
import styles from './tag.module.css'


const NotionBackgroundClassNames = ["notion-red_background ", "notion-pink_background", "notion-blue_background", "notion-purple_background", 
	"notion-teal_background", "notion-yellow_background", "notion-orange_background", "notion-brown_background", "notion-gray_background"];
const NotionBackgroundCoClassNames = ["notion-red_background_co ", "notion-pink_background_co", "notion-blue_background_co", "notion-purple_background_co", 
	"notion-teal_background_co", "notion-yellow_background_co", "notion-orange_background_co", "notion-brown_background_co", "notion-gray_background_co" ];
const NotionBackgroundDarkClassNames = ["notion-dark_red_background ", "notion-dark_pink_background", "notion-dark_blue_background", "notion-dark_purple_background", 
	"notion-dark_teal_background", "notion-dark_yellow_background", "notion-dark_orange_background", "notion-dark_brown_background", "notion-dark_gray_background"]

const PCCSBrightBackgroundClassNames = ['b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19','b20','b21','b22','b23','b24']

const backgroundClassNames = PCCSBrightBackgroundClassNames;

const colorMap = {}

const getColor= (name)=>{
	if(colorMap[name]) return colorMap[name];
	const color  = randomBackground();
	colorMap[name] = color;
	return color;
}

const randomBackground = ()=>{
	return backgroundClassNames[Math.floor(Math.random() * backgroundClassNames.length)];
}

export default function Tag({ name, className, onClick}) {
	return (
		<div className={`${styles.tag} ${styles[getColor(name)]} ${className ? className : ''}`} onClick={onClick}>
		{ name }
		</div>
	)
}