import Section from '../index'
import Item from './item'

import styles from './index.module.css'

export default function({header}){
	return (
		<Section header={header}>
			<div className={`${styles.container}`}>
				<Item duration={'2014.03 ~ 2024.08'} name={'한양대학교 (ERICA 캠퍼스)'} level={'소프트웨어학과 학사'}/>
			</div>
		</Section>);
}