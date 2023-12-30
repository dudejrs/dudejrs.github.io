import Info from './section/info'
import AcademicCareer from './section/academicCareer'
import Certification from './section/certification'
import Etc from './section/etc'

import styles from './index.module.css'

	
function Resume() {
	return (
		<div className={`${styles.container}`}>
			<Info />
			<AcademicCareer header={'학력'} />	
			<Certification header={'자격증'} />
			<Etc header={'기타'} />
		</div>
	);
}


export default Resume;