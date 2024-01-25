
import Skills from '../components/skills';

import Section from './section'

export default function({className, skills, levelDescriptions, colors}){
	return (
		<Section className={className} title={`Skills`} description={'사용해 보았거나 공부하고 있는 기술들에 대한 주관적인 능숙도를 나타내었습니다.'} >
			<Skills  skills={skills} levelDescriptions={levelDescriptions} colors= {colors}/>
		</Section>
		)
}