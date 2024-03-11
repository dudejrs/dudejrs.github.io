import {useRef, useEffect, Children} from 'react'
import html2pdf from 'html2pdf.js'

import Download from './download'

import styles from './printable.module.css'

export default function({className, children, filename='test', layout = 'portrait'}) {

	const target = useRef()
	const container = useRef()

	const print = () => {
		container.current.classList.toggle(`${styles.container}`)
		var worker = html2pdf()
		var option = {
			filename: filename,
			jsPDF: {orientation: layout}
		}
		worker.from(target.current)
			.set(option)
			.from(target.current)
			.save()
		container.current.classList.toggle(`${styles.container}`)

	}

	return (
		<div className={`${styles.container} ${className}`} ref={container}>
			<Download onClick={print}/>
			<div ref={target}>
				{
					Children.map(children, child => <div className={`${layout == 'landscape' ? styles.landscape : styles.portrait}`}>
						{child}
					</div>)
				}
			</div>
		</div>
		)
}