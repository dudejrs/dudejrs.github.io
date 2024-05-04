import {useRef, useEffect, useState} from 'react'

import {Context} from './context/currentNodeSize'

export default function({children, className, style}){

	const ref = useRef()
	const [size, setSize] = useState([0, 0, false])

	const onResize = ()=> {
		const rect = ref.current.getBoundingClientRect()
		setSize([rect.width, rect.height, rect.width > window.innerWidth])
	}

	useEffect(()=>{
		onResize()
		window.addEventListener("resize", onResize)
		return ()=>{
			window.removeEventListener('resize', onResize);
		}
	},[])


	return (
		<div ref={ref} className={`${className}`} style={style}>
			<Context.Provider value={size} >
				{
					children
				}
			</Context.Provider>
		</div>
		)
}