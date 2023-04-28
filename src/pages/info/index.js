
import Introduction from './introduction';
import Experience from './experience';
import Skills from '../components/skills';
import Loadmap from '../components/loadmap';

import styles from './index.module.css';



const markdown_content = `
> 안녕하세요. 웹 프로그래머를 희망하여 정진하고있는 개발자 지망생입니다. 
`;


const skills = [{
	title : "Backend",
	items : [

			{ title : "Framework", items : ["Node.js", "Spring & Spring Boot"], levels : [1,1]},
			{ title : "Database", items : ["Oracle", "MySQL"], levels : [1,0]},
			{ title : "Infra", items : ["Linux", "Aws"], levels : [1,0]}

]
},{
	title : "Frontend",
	items : ["Html+Css", "React.js"],
	levels : [2,1]
},{
	title : "Programing Language",
	items : ["Javascript", "Java", "C++", "Python"],
	levels : [2, 2, 2, 1]

}];

const levelDescriptions = ["사용 경험이 있음", "학습하고 있는 중임", "활용 경험이 많음" , "사용이 자유로움" ]
const colors = ["#d2d2d2","#b3d8e7","#80bed7","#4da4c7"]

const projects = [
		{
			title : "멀티플렉스 영화관 사이트 구현",
			src : "img/experience/multiplex_reservation copy.png",
			description : "데이터베이스 과목 실습 과제로 Node.js Express 프레임워크와 MySQL을 이용하여 구현한 웹 앱 사이트입니다.",
			tags : "Node.js Mysql React.js",
			term : "2019.10 ~ 2019.12"
		},
		{
			title : "자연어 처리",
			src : "",
			description : "수정중 입니다...",
			tags : "Python",
			term : "2021.01 ~ 2021.02"
		},
		{
			title : "WearOS 기반 주식 어플리케이션 개발",
			src : "img/experience/wear_os_application.png",
			description : "수정중 입니다...",
			tags : "Kotlin Node.js Python",
			term : "2021.05 ~ 2021.06"
		},
		{
			title : "",
			src : "",
			description : "",
			tags : "",
			term : ""
		},

];

const trackListMap = {
	"Javascript" : ["Javascript","Node.js","React.js", "Next.js"],
	"Java" : ["Java","Spring Boot", "Spring", "JPA", "Spring WebFlux"],
	"DBMS" : ["SQL","Oracle","MySQL", "MongoDB", "GraphQL"],
	"Backend" : ["Basic", "Backend", "Kafka", "Redis"],
	"DevOps" : ["Linux", "Docker", "Kubernetices", "AWS"],
	"Data Science" : ["Python","Tesnorflow","Pytorch", "Data Science", "Scrapping/Crawling"],
	"Graphics" :["OpenGL", "WebGL", "Three.js", "D3.js"]
}

const trackLists = ["Javascript","Java","DBMS","Backend","DevOps","Data Science", "Graphics"];



export default function Info() {
	
	return (
		<div className={styles.content}> 
			<Introduction className={styles.section} markdown_content={markdown_content}/>
			<Experience projects={projects}/>
			<Skills className={styles.section} skills={skills} levelDescriptions={levelDescriptions} colors= {colors}/>
			<Loadmap className={styles.section} trackLists={trackLists} trackListMap={trackListMap}/>
		</div>
		);
}