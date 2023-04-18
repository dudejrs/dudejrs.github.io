import Tag from '../../components/tag'
import styles from './index.module.css'

export default function MultiSelect({data}){
	return (<>
				{
					data.map(tag => (<Tag name= {tag} className={styles.multiselect_item}/>))
				}
			</>
	);
}