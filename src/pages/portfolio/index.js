import {Printable, Page} from '../../components/ui/printable'


export default function(){
	return (
		<Printable layout='landscape'>
			<Page>
				자기소개
			</Page>
			<Page>
				웹개발자가 되기 위해 노력해온 과정1 : 코딩 테스트 공부 
			</Page>
			<Page>
				웹개발자가 되기 위해 노력해온 과정2 : web개발 관련 공부
			</Page>
			<Page>
				웹개발자가 되기 위해 노력해온 과정3 : 인프라에 대한 공부 
			</Page>
			<Page>
				웹개발자가 되기 위해 노력해온 과정4 : 클린코드, 디자인패턴, 소프트웨어설계 
			</Page>
			<Page>
				웹개발자가 되기 위해 노력해온 과정5 : 클린코드, 디자인패턴, 소프트웨어설계 
			</Page>			
			<Page>
				프로젝트 경험 요약
			</Page>			
		</Printable>
	)
}