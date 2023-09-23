
import SomeCountAndRepetition from './counts/someCountAndRepititon'
import SomeCount from './counts/someCount'

import styles from './index.module.css'



export default function AggregationByCategories({className, data, programmingLanguages}){
	return (
			<div className={`${styles.totalContainer} `}>
				{
					data 
					&& data.map(category => 
						(<SomeCountAndRepetition className={styles.countContainer} 
							data={category}>
							{
								programmingLanguages.map(lang=>
									<SomeCount 
										className={styles.subCountContainer}
										name={lang} 
										count={category[lang]}/>
									) 
							}
						</SomeCountAndRepetition>))
				}
			</div>

		);
}