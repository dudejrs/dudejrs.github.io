import Accordian from '../../../components/ui/accordian'

function onClick(key, active, setActived) {
	if (active) {
		setActived(null)
		return
	}
	setActived(key)
}

function Header({active, data}) {
	return <>{!active && `${data[1].length}개의 ${data[0]}`}</>
}

export default function ItemHolder({i : key, d : data, active, setActived, Items}) {

	if (data[1].length == 0) {
		return <> </>
	}

	return (
		<div>
		<Accordian 
				onClick={()=> onClick(key, active, setActived) } 
				header={<Header active={active} data={data}/>}
				active={active}
				>
				 {Items}
		</Accordian>
	</div>)
}
