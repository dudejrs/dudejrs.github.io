import Section from './index'
import styles from './info.module.css'

export default function({header}){

	const name = '김덕영'
	const email = 'dudejrss@naver.com'
	const introduction = `실생활에 유용한 웹 서비스를 개발할 수 있는 Java 백엔드 개발자를 목표로 정진하고 있습니다. 
				Java, Javascript, Python 언어에 친숙하고, React.js와 Node.js를 통한 간단한 웹 어플리케이션에 대한 경험이 있습니다.
				현재 Oracle DBMS 와 Spring 프레임워크에 대하여 학습 중이며, 웹 개발과 인프라 운영 관점에서 전문성 있는 개발자가 되고 싶습니다. `

	return (
			<Section className={styles.container} header={header}>
				<div className={`${styles.name} ${styles.item}`}> {name} </div>
				<div className={`${styles.email} ${styles.item}`}> {email} </div>
				<div className={`${styles.introduction} ${styles.item}`}>
					{
						introduction.split('\n').map(s => (<p className={styles.introductionItem}>{s}</p>))
					}
				</div>	
			</Section>
		);
}