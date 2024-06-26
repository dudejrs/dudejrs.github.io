import styles from './index.module.css'
import {Tag} from '../../../../components'

export default function Project({
	className,
	src,
	title,
	description,
	tags,
	term,
	onClick,
	isClicked,
	index
}) {
	if(!src) src = "img/experience/default_background.png";

	return (

			<div className={(isClicked)? `${className}` : `${className} ${styles.container}`}>
				{
					isClicked || <img className={styles.icon} src="img/experience/extend_icon2.png" onClick={()=>onClick(index)}/>
				}
				
				<img className={styles.img} src={src}/>	
				<span className={styles.title}> {title} </span>
				<p className={styles.description}>{description}</p>
				<div className={styles.tags}> 
					{
						tags.map((tag)=>
							<Tag name={tag} key={tag}/>)
					}
				</div>
				<span className={styles.term}>{term}</span>
			</div>
		);
}