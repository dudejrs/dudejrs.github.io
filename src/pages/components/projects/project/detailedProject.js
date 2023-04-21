import styles from './detailedProject.module.css'
import Tag from '../../../../components/tag'

export default function DetailedProject({
	className,
	src,
	title,
	description,
	tags,
	term,
	onClick,
	isClicked
}) {

	if(!src) src = "img/experience/default_background.png";

	return (
			<div className={`${className} ${styles.container}` }>
				<img className={styles.icon} src="img/experience/exit_icon2.png" onClick={()=>onClick(false)}/>
				<img className={styles.img} src={src}/>
				<div className={styles.content} >
					<span className={styles.title}> {title} </span>
					<p className={styles.description}>{description}</p>
					<div className={styles.tags}> 
						{
							tags.split(' ').map((tag)=>
								<Tag name={tag} />)
						}
					</div>
					<span className={styles.term}>{term}</span>
				</div>
			</div>
		);
}