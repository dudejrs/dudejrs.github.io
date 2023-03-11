import styles from './project.module.css'
import Tag from '../../../../components/tag'

export default function Multiplex({className}) {
	return (

			<div className={className}>
				<img className={styles.img} src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"/>
				<span className={styles.title}> 멀티플렉스 영화관 사이트 구현 </span>
				<p className={styles.description}> 데이터베이스 과목 실습 과제로 Node.js Express 프레임워크와 MySQL을 이용하여 구현한 웹 앱 사이트입니다.</p>
				<div className={styles.tags}> 
					<Tag name='Node.js' /> 
					<Tag name='Expres' /> 
					<Tag name='MySQL' />
				</div>
				<span className={styles.term}>2019.10 ~ 2019.12</span>
			</div>
		);
}