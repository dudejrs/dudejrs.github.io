import styles from './itemStack.module.css'

export default function({d: data, i, mapper}) {

	return (
		<div key={i}> 
			{
				data.map(mapper)
			}
		</div>
	)
}