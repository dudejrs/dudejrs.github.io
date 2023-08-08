
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
			description : "Node.js Express 프레임워크와 MySQL을 이용하여 구현한 웹 앱 사이트입니다.",
			detailedDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris in arcu viverra volutpat. Donec sed faucibus libero. Sed porta risus et sollicitudin scelerisque. Duis erat magna, hendrerit id interdum semper, venenatis auctor eros.",
			tags : "Node.js Mysql",
			term : "2019.10 ~ 2019.12",
			page : "projects/cenema"
		},
		{
			title : "WearOS 기반 주식 어플리케이션 개발",
			src : "img/experience/wear_os_application.png",
			description : "WearOS기반 주식 어플리케이션 프로토타입과 웹 서비스 개발 프로젝트입니다.",
			detailedDescription : "KB증권 공모전에 제출했던 WearOS기반 주식 어플리케이션과 어플리케이션을 위한 서비스 개발 프로젝트입니다. Android WearOS 디자인 가이드라인을 따라 주식 어플리케이션 UI를 설계하고, MVVM패턴에 맞게 어플리케이션을 구현하였습니다. 또한 어플리케이션이 동작하기 위한 실시간 주식 정보 스크래퍼 서버와 주식 api서버를 구현하였습니다.",
			tags : "Kotlin Node.js Python",
			term : "2021.05 ~ 2021.06",
			page : "/projects/WearOS"
		},
		{
			title : "자연어 전처리 실습",
			src : "",
			description : "수집된 텍스트의 word2vec 및 토픽모델링 등의 자연어 전처리 실습입니다.",
			detailedDescription : "(주)와이즈넛 겨울인턴십 프로젝트에서 진행한, 수집된 텍스트의 word2vec 및 토픽모델링등의 자연어 전처리 실습 입니다.",
			tags : "Python",
			term : "2021.01 ~ 2021.02",
			page : "projects/"
		},
		{
			title : "",
			src : "",
			description : "",
			detailedDescription : "",
			tags : "",
			term : "",
			page : ""
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

const updateDate  = "2023.08.08"


export default function Info() {
	
	return (
		<div className={styles.content}> 
			<Introduction className={styles.section} markdown_content={markdown_content}/>
			<Experience projects={projects}/>
			<Skills className={styles.section} skills={skills} levelDescriptions={levelDescriptions} colors= {colors}/>
			<Loadmap className={styles.section} trackLists={trackLists} trackListMap={trackListMap} updateDate={updateDate}/>
		</div>
		);
}