import styles from './index.module.css'

export default function ({
	data, height, vwidth, radius, vmargin,
	mapper, itemWidth, scale
}) {
	if (!height || !mapper) {
		return <></>
	}
	
	return (<>
			{
				height && mapper &&
				<div className={`${styles.itemContainer}`} style={{width : vwidth, height: height}}>
					{
						data.map((d, i) => <div className={`${styles.item} ${styles.center}`} key={i} style={{left : scale(d)}} >
							{mapper(d, i)}
						</div>)	
					}
				</div>
			}
			</>)
}