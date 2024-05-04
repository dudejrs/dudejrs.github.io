import {Printable, Page} from '../../components/ui/printable'


export default function(){
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