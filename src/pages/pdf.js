import {useRef, useEffect} from 'react'
import html2pdf from "html2pdf.js"

import {Printable, Portrait} from '../components/ui/printable'

import styles from './pdf.module.css'

export default function({}){

	const ref = useRef()

	useEffect(()=>{
		
	},[])

	const onClick = () => {
		const worker = html2pdf()
		worker.from(ref.current).save()
	}

	return (
		<Printable className={styles.container} ref={ref}>
			<Portrait>
				Hello World!
			</Portrait>
			<Portrait>
				Hello World!
			</Portrait>
		</Printable>
	)
}