
import InfoStyles from './index.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './introduction.module.css'


export default function Introduction() {
	
const content = `
> 안녕하세요. 웹 프로그래머를 희망하여 정진하고있는 김덕영입니다. 
	`;

	return (
			<div id="introduction" className={`${InfoStyles.section} ${styles.info_container}`}>
				<ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
				<div className={styles.contact_container}>
					<a href="https://dudejrs.tistory.com/" >
						<img className={styles.contact_img} src={'img/contact/tistory.svg'}/>
						<span>https://dudejrs.tistory.com/</span>
					</a>
					<a href="https://github.com/dudejrs">
						<img className={styles.contact_img} src={'img/contact/github-mark.svg'}/>
						<span>https://github.com/dudejrs</span>
					</a>
					<a href="mailto:dudejrss@naver.com">
						<img className={styles.contact_img} src={'img/contact/email.png'}/> 
						<span>dudejrss@naver.com</span>
					</a>
				</div>
			</div>
		);
}