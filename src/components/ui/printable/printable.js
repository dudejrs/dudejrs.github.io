import {useRef, useEffect} from 'react'
import html2pdf from 'html2pdf.js'

import Portrait from './portrait'
import styles from './printable.module.css'

export default function({className, children}) {

	const target = useRef()
	const container = useRef()

	const print = () => {
		container.current.classList.toggle(`${styles.container}`)
		var worker = html2pdf()
		worker.from(target.current)
		.from(target.current)
		.save()
		container.current.classList.toggle(`${styles.container}`)

	}

	return (
		<div className={`${styles.container} ${className}`} ref={container}>
			<div onClick={print}>
				다운로드 
			</div>
			<div ref={target}>
				{
					children
				}
			</div>
		</div>
		)
}