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

export default function ItemHolder({i : key, d : data, active, setActived, Items, Item, className}) {
	if (data[1].length == 0) {
		return <> </>
	}

	return (
		<div className={className} style={{width : "100%"}}>
		<Accordian 
				onClick={()=> onClick(key, active, setActived) } 
				header={<Header active={active} data={data}/>}
				active={active}
				>
				<Items type={data[0]} data={data} Item={Item}/>
		</Accordian>
	</div>)
}
