import {useEffect, useState} from 'react'

import Dropdown from './index'
import TagList from './taglist'


export default function({className, width, names=[], tags=[], callback, max = 8}){

	const [tags_, setTags] = useState([])
	const [names_, setNames]  = useState([])
	const [clicked, setClicked] = useState(false)

	const select = (name)=>{
		if(tags_.length >= max){
			alert(`최대 ${max}개 까지 입력이 가능합니다`)
			return
		}
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
		callback && callback(tags_)
	}, [tags_])


	return (
			<Dropdown className={className} width={width} content={<TagList names={tags_} onTagClick={deSelect}/>}>
				<TagList names={names_} onTagClick={select}/>
			</Dropdown>
		);
}