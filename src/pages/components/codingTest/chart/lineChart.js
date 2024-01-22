import {LinePlot} from '../../../../components/chart';
import Box from './box'

export default function({data}){
	return (
		<Box>
			<LinePlot data={[1,2,3,4,5,6,7,8,9,10]} width={150} height={150} margin={{top: 20, right : 20, bottom : 20, left : 20 }} />
		</Box>
	)
}