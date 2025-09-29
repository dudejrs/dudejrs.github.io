import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import {Printable, Page} from '../../../components/ui/printable';
import {VerticalTimeLine} from '../../../components/ui/timeline';
import {
    ProblemDonutChart,
    CategoryDonutChart,
    ProblemTypeSpiderChart,
    ProblemLineChart,
} from '../../components/codingTest/chart';

import Table from '../../../notion/table';

import {fetchExperience} from '../../../domain/experience';

import {Profile} from '../common'

import styles from './naverboostcamp.module.css';
import List from '../common/list';
import ListItem from '../common/listItem';

function Title({children}) {
    return <h3 className={`${styles.title}`}>{children}</h3>;
}

const planMapper = [
    undefined,
    (d, i) => {
        if (!d || !d['기간']['start'] || !d['기간']['end']) {
            return <></>;
        }
        return (
            <div className={`${styles.term}`} key={i}>
                {' '}
                {`${d['기간'].start.slice(0, 10)} ~ ${d['기간'].end.slice(0, 10)}`}{' '}
            </div>
        );
    },
    (d, i) =>
        d && (
            <p className={`${styles.planNameContainer}`}>
                {' '}
                <span className={`${styles.planName}`}>{d['title']} </span>{' '}
                <span className={styles.dot}></span>{' '}
                <span className={styles.number}>{i + 1}</span>
            </p>
        ),
    undefined,
];

function ProjectTable({data}) {
    const columns = ['이름', '기간', '기술', '요약(200자)'];
    const types = ['title', 'date', 'multiselect', 'text'];
    const ratio = [1, 1, 1, 5];

    return (
        <div id="notionContainer" className={`${styles.table}`}>
            {Array.isArray(data) && data.length > 0 && (
                <Table
                    columns={columns}
                    types={types}
                    data={data}
                    ratio={ratio}
                    wrap={true}
                    lineStyle={'rgba(150, 150, 150, 0.5) 1px solid'}
                />
            )}
        </div>
    );
}

export default function NaverBoostCampPortfolio() {
    const [data, setData] = useState({});
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

    useEffect(() => {
        axios
            .get(`/data/portfolio/2024/naverboostcamp/plan.json`)
            .then(({data}) => {
                fetchExperience().then(d => {
                    setData({experience: d, ...data});
                });
                setData(data);
            });
    }, []);

    return (
        <Printable
            filename="2024_네이버부스트캠프_포트폴리오"
            layout="landscape"
        >
            <Page className={`${styles.container}`}>
                <Title> 자기소개 </Title>
                <Profile styles={styles}/>
            </Page>

            <Page className={`${styles.container}`}>
                <div className={`${styles.titleContainer}`}>
                    <Title>
                        {' '}
                        웹개발자가 되기 위해 노력해온 과정1 : 코딩 테스트
                        공부{' '}
                    </Title>
                    <div className={`${styles.titleDescription}`}>
                        {' '}
                        코딩테스트 문제를 다양한 언어로 풀면서 컴퓨팅 사고를
                        학습하려 하였습니다. 연습한 코드는{' '}
                        <a href="https://github.com/dudejrs/coding-practice">
                            여기
                        </a>{' '}
                        에서 볼 수 있습니다.{' '}
                    </div>
                </div>

                <div className={`${styles.practice}`}>
                    <div className={`${styles.subcontainer}`}>
                        <ProblemDonutChart
                            className={`${styles.item}`}
                            width={250}
                            radius={50}
                            lengendWidth={60}
                            legendHeight={80}
                            programmingLanguages={programmingLanguages}
                            layout={'landscape'}
                        />
                        <CategoryDonutChart
                            className={`${styles.item}`}
                            width={250}
                            radius={50}
                            languages={programmingLanguages}
                            categories={categories}
                            height={'440px'}
                            layout={'landscape'}
                        />
                        <ProblemTypeSpiderChart
                            className={`${styles.item}`}
                            width={250}
                            height={'8cm'}
                            radius={100}
                            hidden={true}
                            types={types}
                            fields={['count']}
                        />
                    </div>
                    <div className={`${styles.subcontainer}`}>
                        <ProblemLineChart
                            className={`${styles.item}`}
                            keyword={'Count'}
                            height={200}
                            width={750}
                            day={240}
                        />
                    </div>
                    <div className={`${styles.description}`}>
                        * 동일한 문제를 다른언어로 풀 수 있기 때문에, 총 풀은
                        문제의 수와 각 언어 별/카테고리 별 풀은 문제 수의 총합이
                        다를 수 있습니다.
                    </div>
                </div>
            </Page>

            <Page className={`${styles.container}`}>
                <div className={`${styles.titleContainer}`}>
                    <Title>
                        {' '}
                        웹개발자가 되기 위해 노력해온 과정2 : web 프레임워크에
                        관한 공부{' '}
                    </Title>
                    <div className={`${styles.titleDescription}`}>
                        {' '}
                        Node.js, Spring 등의 웹 프레임워크에 대해 공부했던
                        내용입니다.{' '}
                    </div>
                </div>
                <div className={`${styles.sections}`}>
                    {Object.keys(data).length !== 0 && (
                        <VerticalTimeLine
                            data={data['Node.js,Spring,React,Angular']}
                            width={500}
                            height={550}
                            mapper={planMapper}
                            ratio={1.5}
                            ratios={[0, 0.5, 2, 0]}
                            bmargin={50}
                            stroke={2}
                            radius={4}
                            color={'#aaa'}
                            minSize={[1000, 500]}
                            className={`${styles.timeline}`}
                        />
                    )}
                    <div className={`${styles.section} ${styles.between}`}>
                        <List title={`배운점`}>
                            <ListItem
                                title={`Angular의 바인딩 문법과 디렉티브`}
                                tags={[1]}
                            />
                            <ListItem
                                title={`Angular의 주요 개념 : 양방향 바인딩, 계층적 인젝터, 변경감지 전략`}
                                tags={[1]}
                            />
                            <ListItem
                                title={`Spring 프레임워크의 주요 개념 : 의존성 주입과 제어 역전(IOC/DI), 관점지향 프로그래밍(AOP)`}
                                tags={[2, 4]}
                            />
                            <ListItem
                                title={`객체 관계 매핑(ORM) 및 영속성 관리`}
                                tags={[2, 4]}
                            />
                            <ListItem
                                title={`Jest 및 JUnit을 이용하여 간단한 테스트 코드 작성하는 방법`}
                                tags={[2]}
                            />
                            <ListItem
                                title={`JSX 문법과 리액트 상태관리 방법 (Context API, Redux)`}
                                tags={[5]}
                            />
                        </List>
                        <List title={`네이버 부스트 캠프에 활용할 수 있는 점`}>
                            <ListItem
                                title={`SystemJS, Webpack 등 자바스크립트 모듈 로더/번들러를 이용하여 파일 크기 및 로딩 속도를 개선`}
                                tags={[1]}
                            />
                            <ListItem
                                title={`프레임워크를 이용한 SSR 및 Hydration 적용`}
                                tags={[1, 5]}
                            />
                            <ListItem
                                title={`웹 프레임워크를 이용하여 REST API 개발`}
                                tags={[2, 3]}
                            />
                            <ListItem
                                title={`Express, JWT를 이용한 간단한 토큰 기반 인증`}
                                tags={[3]}
                            />
                        </List>
                    </div>
                </div>
            </Page>

            <Page className={`${styles.container}`}>
                <div className={`${styles.titleContainer}`}>
                    <Title>
                        {' '}
                        웹개발자가 되기 위해 노력해온 과정3 : 인프라에 대한
                        공부{' '}
                    </Title>
                    <div className={`${styles.titleDescription}`}>
                        {' '}
                        데이터베이스와 리눅스에 대해서 공부하였습니다.{' '}
                    </div>
                </div>
                <div className={`${styles.sections}`}>
                    {Object.keys(data).length !== 0 && data['Infra'] && (
                        <VerticalTimeLine
                            data={
                                data['Infra'][
                                    'DBMS,SQL,Linux,Docker,Kubernetices'
                                ]
                            }
                            width={500}
                            height={500}
                            mapper={planMapper}
                            ratio={1.5}
                            ratios={[0, 0.5, 2, 0]}
                            bmargin={50}
                            stroke={2}
                            radius={4}
                            color={'#aaa'}
                            minSize={[1000, 500]}
                            className={`${styles.timeline}`}
                        />
                    )}
                    <div className={`${styles.section}`}>
                        <List title={`배운점`}>
                            <ListItem
                                title={`Oracle DBMS 및 MySQL 서버의 아키텍쳐 구조`}
                                tags={[]}
                            />
                            <ListItem
                                title={`트랜잭션 수준과 동시성 제어 방법`}
                                tags={[]}
                            />
                            <ListItem
                                title={`쿼리 힌트 작성 방법 및 SQL 실행 계획 읽는 방법`}
                                tags={[]}
                            />
                            <ListItem
                                title={`SQL 성능 튜닝 원리 : 라이브러리 캐시 최적화, 데이터베이스 Call 최소화, I/O 효율화`}
                                tags={[]}
                            />
                            <ListItem
                                title={`리눅스 디렉토리 구조 및 패키지 관리`}
                                tags={[]}
                            />
                            <ListItem
                                title={`리눅스 주요 셸 커맨드`}
                                tags={[]}
                            />
                            <ListItem
                                title={`리눅스의 주요 서비스: DNS, Apache, Proftp, Samba, NFS`}
                                tags={[]}
                            />
                        </List>
                        <List title={`네이버 부스트 캠프에 활용할 수 있는 점`}>
                            <ListItem
                                title={`데이터베이스 설계: 테이블 구조 선택 및 인덱스 설계`}
                                tags={[]}
                            />
                            <ListItem
                                title={`간단한 쿼리 성능 튜닝 및 트러블 슈팅`}
                                tags={[]}
                            />
                            <ListItem
                                title={`DBMS 설정 : 트랜잭션 레벨 설정, 버퍼캐시  라이브러리 캐시 크기 설정`}
                                tags={[]}
                            />
                            <ListItem
                                title={`xietd 및 crontab을 통한 서비스 데몬 및 배치프로그램 설정`}
                                tags={[]}
                            />
                            <ListItem
                                title={`리눅스 서버의 네트워크 관련 설정`}
                                tags={[]}
                            />
                        </List>
                    </div>
                </div>
            </Page>

            <Page className={`${styles.container}`}>
                <div className={`${styles.titleContainer}`}>
                    <Title>
                        {' '}
                        웹개발자가 되기 위해 노력해온 과정4 : 객체 지향 개발
                        방법론 및 소프트웨어 설계{' '}
                    </Title>
                    <div className={`${styles.titleDescription}`}>
                        {' '}
                        객체 지향 방법론, 클린 코드 작성 방법, 디자인 패턴,
                        소프트웨어 설계에 관한 8권의 책을 읽으며 관련 관점을
                        배웠습니다.
                    </div>
                </div>
                <div className={`${styles.sections}`}>
                    {Object.keys(data).length !== 0 && (
                        <VerticalTimeLine
                            data={data['Basic'].slice(0, 8)}
                            width={500}
                            height={550}
                            mapper={planMapper}
                            ratio={1.5}
                            ratios={[0, 0.5, 2, 0]}
                            bmargin={50}
                            stroke={2}
                            radius={4}
                            color={'#aaa'}
                            minSize={[1000, 500]}
                            className={`${styles.timeline}`}
                        />
                    )}
                    <div className={`${styles.section}`}>
                        <List title={`배운점`}>
                            <ListItem
                                title={`도메인 설계의 주요 개념 : ENTITY, 값 객체(VO), 서비스, Aggregate, 팩터리, 레포지터리, 바운디드 컨텍스트`}
                                tags={[1, 5]}
                            />
                            <ListItem
                                title={`계층 구조 아키텍처와 각 계층의 역할 : 표현, 응용, 도메인, 인프라 스트럭쳐`}
                                tags={[1, 5]}
                            />
                            <ListItem
                                title={`명세기반 테스트, 구조적 테스트, 속성 기반 테스트, 테스트 주도 개발`}
                                tags={[2]}
                            />
                            <ListItem
                                title={`계약에 의한 코드 설계 : 사전조건, 사후조건, 불변식`}
                                tags={[2, 3, 4]}
                            />
                            <ListItem
                                title={`코드 품질의 핵심 요소 : 가독성, 예측가능성, 재사용성, 일반화성, 테스트 용이성`}
                                tags={[3]}
                            />
                            <ListItem
                                title={`명시적, 암시적 오류 전달 방법`}
                                tags={[3]}
                            />
                            <ListItem
                                title={`객체 불변성을 유지하는 방법`}
                                tags={[3]}
                            />
                            <ListItem
                                title={`테스트 더블의 종류 : Mock, Stub, Fake`}
                                tags={[2, 3]}
                            />
                            <ListItem
                                title={`코드 재사용을 위한 두가지 방법 : 상속과 합성`}
                                tags={[4]}
                            />
                            <ListItem
                                title={`책임주도적 객체 지향 설계 방법 : GRASP`}
                                tags={[4, 7]}
                            />
                            <ListItem
                                title={`명령-쿼리 분리 및 참조 투명성, 불변성`}
                                tags={[4]}
                            />
                            <ListItem
                                title={`프로그래밍 패러다임 : 구조적, 객체지향적, 함수형 프로그래밍`}
                                tags={[6]}
                            />
                            <ListItem
                                title={`SOLID원칙 : SRP, OCP, LSP, ISP, DIP`}
                                tags={[6]}
                            />
                            <ListItem
                                title={`컴포넌트 응집도 원칙(REP, CRP, CRP)과 결합도 원칙(ADP, SDP, SAP)`}
                                tags={[6]}
                            />
                            <ListItem
                                title={`소프트웨어 아키텍쳐의 개념: 정책, 세부사항, 저수준/고수준, 경계`}
                                tags={[6]}
                            />
                            <ListItem
                                title={`문제 해결의 두가지 관점 : 구조적 관점과 기능적 관점`}
                                tags={[6, 7]}
                            />
                            <ListItem
                                title={`객체지향의 23가지 디자인 패턴 : 생성, 구조, 행위`}
                                tags={[8]}
                            />
                        </List>
                    </div>
                </div>
            </Page>

            <Page className={`${styles.container} ${styles.noBetween}`}>
                <div className={`${styles.titleContainer}`}>
                    <Title> 프로젝트 경험 요약 </Title>
                    <div className={`${styles.titleDescription}`}>
                        {' '}
                        여태까지 경험했던 프로젝트, 실습 내용을 요약하였습니다.
                        더 자세한 내용은{' '}
                        <a href="https://assorted-splash-955.notion.site/9956366142d1485bb4ab5918168f2f74">
                            여기
                        </a>
                        에서 보실 수 있습니다.{' '}
                    </div>
                </div>
                <div className={`${styles.sections} ${styles.experience}`}>
                    <ProjectTable data={data['experience']} />
                </div>
            </Page>
        </Printable>
    );
}
