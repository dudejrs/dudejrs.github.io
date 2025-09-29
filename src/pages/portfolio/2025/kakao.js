import React from 'react';
import {Printable} from '../../../components/ui/printable';
import styles from './kakao.module.css';
import {Profile, PageWrapper, Study, Experience} from '../common';
import {
    CategoryDonutChart,
    ProblemDonutChart,
    ProblemTypeSpiderChart,
} from '../../components/codingTest/chart';
import List from '../common/list';
import ListItem from '../common/listItem';

export default function Kakao() {
    const programmingLanguages = [
        'C++',
        'Java',
        'Javascript',
        'Python',
        'Go',
        'Kotlin',
        'Typescript',
    ];
    const categories = ['디자인패턴', '코딩테스트', '알고리즘'];
    const types = ['Greedy', 'BFS', 'DFS', '완전탐색', '분할정복', 'DP'];

    return (
        <Printable filename="2025_카카오_포트폴리오" layout={'landscape'}>
            <PageWrapper className={styles.introduction} title={'자기소개'}>
                <Profile
                    styles={styles}
                    certificationFilterList={[
                        '[PCCP] Java',
                        '[PCCP] Python',
                        'TOEIC',
                    ]}
                />
            </PageWrapper>
            <Study on={'Spring / Node.js'} categories={['Spring', 'Node.js']}>
                <List title={'배운점'}>
                    <ListItem
                        title={`Spring의 의존성 주입(IoC)와 제어 역전(DI)에 대해 설명할 수 있습니다.`}
                    />
                    <ListItem
                        title={`Spring bean의 생명주기에 대해 설명할 수 있습니다.`}
                    />
                    <ListItem
                        title={`관점지향 프로그래밍(AOP)에 대해 설명할 수 있습니다.`}
                    />
                    <ListItem
                        title={`JDBC, Hibernate, JPA를 이용한 데이터베이스 CRUD 작업을 할 수 있습니다. `}
                    />
                    <ListItem
                        title={`객체 관계 매핑(ORM) 도구를 이용하여 영속성 관리를 할 수 있습니다.`}
                    />
                    <ListItem
                        title={`Node.js의 내부 구조에 대해 설명할 수 있습니다.`}
                    />
                    <ListItem
                        title={`Node.js의 비동기 이벤트 프로그래밍을 할 수 있습니다.`}
                    />
                    <ListItem
                        title={`Jest 및 JUnit을 이용하여 간단한 테스트 코드 작성할 수 있습니다.`}
                    />
                </List>
            </Study>
            <Study
                on={'OOP / FP'}
                categories={['Basic']}
                filters={[
                    '보안',
                    'Clean Ar',
                    '리팩토링',
                    '테스팅',
                    '좋은',
                    '도메인',
                    '함수형 자바스크립트 프로그래밍 완독',
                ]}
            >
                <List title={'배운점'}>
                    <ListItem
                        title={
                            '객체지향의 23가지 디자인 패턴에 대해 설명할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            '절차지향 프로그래밍과 객체지향 프로그래밍을 구분할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            '추상화와 다형성을 이용하여 유연하고 재사용성이 높은 코드를 작성할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            '사전조건, 사후조건, 불변식 등 계약에 의한 설계에 의해 코드를 작성할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            '타입 공변성과 반공변성에 대해 설명할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            '객체의 불변성을 지키기 위한 방법에 대해 설명할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            '부수효과 있는 함수를 최소화하면서 순수함수들로 구성되도록 프로그래밍을 작성할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            '펑터와 모나드를 사용해서 예측가능한 값을 반환하는 콛크를 작성할 수 있습니다.'
                        }
                    />
                </List>
            </Study>
            <Study
                on={'DBMS'}
                categories={['Oracle', 'MySQL', 'MongoDB']}
                filters={['자격증', 'PL/SQL']}
            >
                <List title={'배운점'}>
                    <ListItem
                        title={
                            'Oracle DBMS와 MySQL 서버의 아키텍쳐 구조에 대해 설명할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            'DBMS의 트랜잭션의 수준과 동시성 제어 방법에 대해 설명할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            'Oracle DBMS과 MySQL의 쿼리 힌트 작성방법을 알고 원하는 실행계획을 유도하도록 작성할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            'SQL 성능 튜닝의 방법에 대해 설명할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            'SQL 표준과 Oracle SQL을 활용해 초·중급 수준의 쿼리를 작성할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            'MySQL의 InnoDB와 MyISAM 스토리지 엔진을 차이점에 대해 설명할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={'MongoDB에 기초적인 쿼리를 작성할 수 있습니다.'}
                    />
                </List>
            </Study>
            <Study
                on={'AWS, Docker'}
                status={['Suspend']}
                categories={['AWS', 'Docker']}
            >
                <List title={'배운점'}>
                    <ListItem
                        title={
                            '리전(Region)과 가용 영역(AZ)의 차이를 설명할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            'AWS의 주요 컴퓨팅 서비스와 네트워크 서비스에 대해 설명할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={'AWS의 간단한 VPC를 구성할 수 있습니다.'}
                    />
                    <ListItem
                        title={
                            'Docker 이미지와 컨테이너의 차이를 설명할 수 있습니다.'
                        }
                    />
                    <ListItem
                        title={
                            'Kubernetes의 Pod, Deployment, Service, Ingress 개념을 설명할 수 있습니다.'
                        }
                    />
                </List>
            </Study>
            <Study on={'문제 해결력'} direction={'column'} grow={true}>
                <div className={`${styles.coteContainer}`}>
                    <ProblemDonutChart
                        className={`${styles.item}`}
                        width={300}
                        radius={75}
                        lengendWidth={80}
                        legendHeight={80}
                        programmingLanguages={programmingLanguages}
                        layout={'landscape'}
                    />
                    <CategoryDonutChart
                        className={`${styles.item}`}
                        width={300}
                        radius={75}
                        languages={programmingLanguages}
                        categories={categories}
                        height={'440px'}
                        layout={'landscape'}
                    />
                    <ProblemTypeSpiderChart
                        className={`${styles.item}`}
                        width={300}
                        radius={150}
                        hidden={true}
                        types={types}
                        fields={['count']}
                    />
                </div>
            </Study>

            <Experience
                title={'네이버 부스트캠프'}
                experiences={[
                    {
                        name: '네이버 부스트캠프 챌린지',
                        period: '2024.07~2024.08',
                        content:
                            '매일 주어지는 다양한 CS 문제에 대해 스스로 자료를 찾아 공부하고, Learning By Making을 통해 학습할 수 있었습니다. 또한, 코드리뷰와 페어프로그래밍을 통해 협업능력 및 커뮤니케이션 능력을 향상할 수 있었습니다.',
                        takeaways: [
                            '절차지향, 객체지향, 함수형 프로그래밍 패러다임에 대해 설명할 수 있습니다.',
                            'Node.js의 이벤트 루프에 대해 설명할 수 있습니다.',
                            '스택 프레임의 구조와 함수 호출/반환시 동작과정에 대해 설명할 수 있습니다.',
                            '자바스크립트이 프로토타입 체인에 대해 설명할 수 있습니다.',
                            'Node.js에서 Worker thread를 이용하여 병렬처리를 할 수 있습니다.',
                            'Pub-Sub 패턴과 이벤트 매니저 패턴에 대해서 설명할 수 있습니다.',
                        ],
                    },
                    {
                        name: '네이버 부스트캠프 멤버십',
                        period: '2024.08 ~ 2024.9 (중도하차)',
                        content: 'Node.js, Express, MySQL을 이용하여 간단한 칸반보드 웹 애플리케이션을 구현하였습니다. 코드리뷰와 그룹세션을 통해 커뮤니케이션 능력을 향상할 수 있었습니다.',
                        takeaways: [
                            'Git의 구조와 Git 브랜치 워크플로우에 대해 설명할 수 있습니다.',
                            'Express의 미들웨어를 이용하여 라우팅을 구현할 수 있습니다. ',
                            'DOM 이벤트의 전파과정에 대해 설명할 수 있습니다.',
                            'SSR와 CSR에 대해 설명할 수 있습니다.',
                            'Nginx, PM2 등의 리벅스 프록시를 사용하는 이유에 대해 설명할 수 있습니다. ',
                            '무중단 배포과정에 대해 설명할 수 있습니다.',
                            '세션쿠키 인증방법에 대해 설며할 수 있습니다.'
                        ]
                    }
                ]}
            />
            <Experience title={'개인 프로젝트 경험'} experiences={[
                {
                    name: '데이터분석 및 개발 위한 웹스크래핑 및 웹 대시보드',
                    period: '2025.06 (1달)',
                    content: '단일 사이트 웹 스크래퍼 구현 및 React와 Next.js 및 MySQL 이용한 웹 대시보드 구현',
                    takeaways: [
                        'BeutifulSoap와 Selenium을 이용한 간단한 정적/동적 웹 페이지 스크래퍼를 구현할 수 있습니다.',
                        'SVG의 구조에 대해 설명할 수 있습니다.',
                        '벡터, 비트맵 그래픽 방식, 타일 최적화 방식 등 지도 렌더링 과정에 대해 설명할 수 있습니다.',
                        '공간 좌표와 공간데이터 형식에 대해서 설명할 수 있습니다',
                        '군집의 외곽선을 구하는 알고리즘에 대해 설명할 수 있습니다.'
                    ]
                }
            ]} />
        </Printable>
    );
}
