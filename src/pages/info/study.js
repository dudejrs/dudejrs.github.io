
import Section from './section'
import Loadmap from '../components/loadmap';

export default function({className, trackLists, trackListMap, updateDate}){
	return (
		<Section title='Studys' description={`현재까지 공부하고 경험했던 내용들을 카테고리에 맞게 정리한 내용입니다.`}>
			<Loadmap trackLists={trackLists} trackListMap={trackListMap} updateDate={updateDate} />
		</Section>
		)
}