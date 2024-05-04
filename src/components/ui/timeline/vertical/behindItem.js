import styles from './index.module.css'

export default function({
	data, width, vheight, vmargin, radius, mapper, scale, itemHeight
}) {

	if (!width || !mapper) {
		return <></>
	}

	return (<>
			{
				width && mapper &&	
				<div className={`${styles.itemContainer}`} style={{width : width, height: vheight}}>
					{
						data.map((d, i) => <div className={`${styles.item}`} key={i} style={{top : scale(d) + radius / 2, height : itemHeight(vheight, radius, vmargin, data.length)}} >
							{mapper(d, i)}
						</div>)	
					}
				</div>
			}
		</>)
}