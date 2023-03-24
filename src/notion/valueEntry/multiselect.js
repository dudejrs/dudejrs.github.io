import Tag from '../../components/tag'


export default function MultiSelect({data}){
	return (<>
				{
					data.map(tag => (<Tag name= {tag}/ >))
				}
			</>
	);
}