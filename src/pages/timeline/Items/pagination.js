import {useContext} from 'react'
import Pagniation from '../../../components/ui/pagination'
import PagniationButtons from '../../../components/ui/pagination/buttons'
import {Context} from '../../../components/ui/pagination/context/currentPageContext'
import { NextLeftButton, NextRightButton }  from '../../../components/ui/button'
import Items from './items'

import styles from './pagination.module.css'

function Page({Item, type}){
	const {p, setP, hasPrev, hasNext, items: data} = useContext(Context)
	return (
		<div >
			<div className={`${styles.buttons}`} style={{ height: "1.5rem", position : "absolute", bottom : 0, right: 0, backgrondColor : "white"}} >
				<PagniationButtons size={1.2} offset={0} backgroundColor="rgba(125,125,125,0.1)" color="#999"/>
			</div>
			<Items data={data} Item={Item} type={type}/>
		</div>)
}

export default function ({data, Item, type, ...props}) {
	return (<Pagniation data={data} pageSize={3} >
				<Page Item={Item} type={type} {...props} />
			</Pagniation>)
}