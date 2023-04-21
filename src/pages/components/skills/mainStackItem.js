
import SubStackItem from './subStackItem';

import SkillsStyles from './index.module.css';
import styles from './mainStackItem.module.css';


function generateStackItems(items){
	if (!items || !Array.isArray(items)) return <div></div>;

	if (typeof items[0] == "string" )
		return <SubStackItem items={items}/>;

	if (typeof items[0] == "object" )
		return items.map((subStack)=>(<SubStackItem key={subStack.title} title={subStack.title} items={subStack.items}/>));

	return <div></div>
}

export default function MainStackItem({children, title, items}) {
	
	return (
			<li className ={styles.mainStackItem}>  
				<span className={styles.title}> {title}  </span> 
				{children}
				{ 
					Array.isArray(items) && generateStackItems(items)

				}
			</li>
		);
}