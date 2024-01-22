
import LineChart from './lineChart'


const defaultMargin = {
		top : 20 ,
		right : 20,
		left : 20,
		bottom : 20
}

const defaultAxis = {
	left : 50,
	bottom : 50,
	margin : defaultMargin
}


export default function({width=1000, heigth}){
	return (
			<LineChart data={[1,2,3,4,5,6,7,8,9,10]} 
						axisData={[new Date(2010, 0, 1),new Date(2010, 0, 7) ,new Date(2010, 2, 14)]}
						title={'시간별 총 푼 문제 수'}
						width={1000}
						axis={{ bottom : 50, margin: defaultMargin, type: 'time', tickformat : 'week'}}
			/>
		)
}