import {useContext} from 'react'
import {NextLeftButton, NextRightButton} from '../button'
import {Context} from './context/currentPageContext'

export default function ({size= 1.5, offset= 0.5, backgroundColor="rgb(26, 115, 233)", color="white", children, style}){
	const {p, setP, hasPrev, hasNext, items} = useContext(Context)

	return <div style={{...style, width : `${2 * size  + offset}rem`, display : "flex", position: "relative"}}>
			{hasPrev && <NextLeftButton size={`${size}rem`}  style={{position : "absolute", left: 0 }} backgroundColor={backgroundColor} color={color} onClick={()=>setP(p - 1)} />}
			{children && <div>
				{
					children
				}
			</div>}
			{hasNext && <NextRightButton size={`${size}rem`} style={{position : "absolute", right: 0}} backgroundColor={backgroundColor}  color={color} onClick={()=>setP(p + 1)} />}
		</div>
}