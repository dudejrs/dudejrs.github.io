import {useEffect, useState} from 'react'

import Dropdown from './index'
import TagList from './taglist'


export default function({className, names, tags=[] }){

	const [tags_, setTags] = useState([])
	const [names_, setNames]  = useState([])
	const [clicked, setClicked] = useState(false)

	const select = (name)=>{
		setTags(tags_.concat(name))
	}

	const deSelect = (name)=>{
		setTags(tags_.filter(n => n != name))
	}

	useEffect(()=>{
		setTags(tags)
	},[])

	useEffect(()=>{
		setNames(names.filter(name => !tags_.includes(name)))
	}, [tags_])


	return (
			<Dropdown content={<TagList names={tags_} onTagClick={deSelect}/>}>
				<TagList names={names_} onTagClick={select}/>
			</Dropdown>
		);
}