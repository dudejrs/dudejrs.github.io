import styles from './project.module.css'
import Tag from '../../../../components/tag'

export default function Project({
	className,
	src,
	title,
	description,
	tags,
	term
}) {
	return (

			<div className={className}>
				<img className={styles.img} src={src}/>
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
		);
}