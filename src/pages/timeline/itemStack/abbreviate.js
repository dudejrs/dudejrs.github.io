
import {useState} from 'react'
import {Item, AbbreviateItem} from '../item'
import ItemHolder from '../itemHolder'
import Accordian from '../../../components/ui/accordian'

function Items({data}) {
	return <div>{
					data[1].map((d, i) => <AbbreviateItem type={data[0]} key={i} d={d} i={i}/>)
				}
		  </div>
}

export default function({d: data, i}) {

	const [actived, setActived] = useState(null)

	return (
		<div key={i}> 
			{
				Object.entries(data).map((d, i) => <ItemHolder key={i} i={i} d={d} active={i === actived} setActived={setActived} Items={<Items data={d}/>}/>)
		
			}
		</div>
	)
}