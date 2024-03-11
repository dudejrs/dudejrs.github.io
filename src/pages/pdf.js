
import {Printable, Page} from '../components/ui/printable'

import styles from './pdf.module.css'

export default function({}){


	return (
		<Printable layout='landscape'>
			<Page>
				Hello World!
			</Page>
			<Page>
				Hello World!
			</Page>
		</Printable>
	)
}