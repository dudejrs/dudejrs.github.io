import {useEffect, useState} from 'react'
import {getActivitesPerMonth} from '../../domain/activities'

import Pagination from '../../components/ui/pagination'
import {ItemStack, AbbreviateItemStack} from './itemStack'
import Tick from './tick'
import {RatioSensibleTimeLine} from '../../components/ui'
import {Content} from './content'


const mapper = [
			undefined,
			(d, i) => d && Object.keys(d).length > 0 && <Tick d={d[0]} i={i} />,
			undefined,
			(d, i) => d && Object.keys(d).length > 0 && <ItemStack d={d[1]} i={i} />,
		]

export default function(){
	const [data, setData] = useState([])

	useEffect(()=> {
		getActivitesPerMonth().then((data) => {
			setData(data)
		})
	},[])

	return (
		<div style={{width: '100%'}}>
			<Pagination data={data} pageSize={3}>
				<Content mapper={mapper}/>
			</Pagination>
		</div>
		);
}