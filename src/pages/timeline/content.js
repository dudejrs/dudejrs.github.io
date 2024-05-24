import {useContext} from 'react'

import Pagination from '../../components/ui/pagination'
import {Context} from '../../components/ui/pagination/context/currentPageContext'

import {NextLeftButton, NextRightButton} from '../../components/ui/button'

import {RatioSensibleTimeLine} from '../../components/ui'

export function Content({mapper}) {
	const {p, setP, hasPrev, hasNext, items} = useContext(Context)

	return (
		<>
		<RatioSensibleTimeLine  data={items} mapper={mapper} ratio={0.8} ratios={[0, 0.5, 0, 2]} bmargin={50} stroke={2} radius={4} color={'#aaa'} minSize={[1300, 600]}/>
		<div style={{width : "3.5rem", display : "flex", position: "relative"}}>
			{hasPrev && <NextLeftButton size={"1.5rem"} style={{position : "absolute", left: 0 }} backgroundColor={"rgb(26, 115, 233)"}  onClick={()=>setP(p - 1)} />}
			{hasNext && <NextRightButton size={"1.5rem"} style={{position : "absolute", right: 0}} backgroundColor={"rgb(26, 115, 233)"}  onClick={()=>setP(p + 1)} />}
		</div>
		</>
		)
}