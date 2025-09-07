import React from 'react';
import Introduction from './introduction';
import Experience from './experience';
import Skills from './skills';
import Study from './study';
import {AboutMe} from '../components/aboutMe';

import {useEffect, useState} from 'react';

import styles from './index.module.css';

import {getPlansUpdatedDate} from '../../domain/plans';

const markdown_content = `
### About Me
${AboutMe}
`;

const skills = [
    {
        title: 'Backend',
        items: [
            {
                title: 'Framework',
                items: ['Node.js', 'Spring'],
                levels: [1, 1, 1],
            },
            {title: 'Database', items: ['Oracle', 'MySQL'], levels: [1, 0]},
            {title: 'Infra', items: ['Linux', 'Aws'], levels: [1, 0]},
        ],
    },
    {
        title: 'Frontend',
        items: ['HTML', 'CSS', 'React'],
        levels: [1, 1, 1],
    },
    {
        title: 'Programing Language',
        items: [
            'Javascript',
            'Java',
            'C++',
            'Python',
            'Kotlin',
            'Go',
            'Typescript',
        ],
        levels: [2, 2, 1, 1, 0, 0, 0],
    },
];

const levelDescriptions = [
    '사용 경험이 있음',
    '학습하고 있는 중임',
    '활용 경험이 많음',
    '사용이 자유로움',
];
const colors = ['#d2d2d2', '#b3d8e7', '#80bed7', '#4da4c7'];

const projects = [
    {
        title: '멀티플렉스 영화관 사이트 구현',
        src: 'img/experience/multiplex_reservation copy.png',
        description:
            'Node.js Express 프레임워크와 MySQL을 이용하여 구현한 웹 앱 사이트입니다.',
        detailedDescription:
            '데이터베이스 과목 실습 과제로, 멀티플렉스 예매사이트를 참고하여 데이터 모델링을 진행하여고,  Node.js Express 프레임워크와 MySQL을 이용하여 구현한 웹 앱 사이트입니다.',
        tags: 'Node.js Mysql',
        term: '2019.10 ~ 2019.12',
        page: 'https://github.com/dudejrs/multiplex_reservation',
    },
    {
        title: 'WearOS 기반 주식 어플리케이션 개발',
        src: 'img/experience/wear_os_application.png',
        description:
            'WearOS기반 주식 어플리케이션 프로토타입과 웹 서비스 개발 프로젝트입니다.',
        detailedDescription:
            'KB증권 공모전에 제출했던 WearOS기반 주식 어플리케이션과 어플리케이션을 위한 서비스 개발 프로젝트입니다. Android WearOS 디자인 가이드라인을 따라 주식 어플리케이션 UI를 설계하고, MVVM패턴에 맞게 어플리케이션을 구현하였습니다. 또한 어플리케이션이 동작하기 위한 실시간 주식 정보 스크래퍼 서버와 주식 api서버를 구현하였습니다.',
        tags: 'Kotlin Node	.js Python',
        term: '2021.05 ~ 2021.06',
        page: 'https://github.com/dudejrs/22capstone_wearOS_application',
    },
    {
        title: '자연어 전처리 실습',
        src: '',
        description:
            '수집된 텍스트의 word2vec 및 토픽모델링 등의 자연어 전처리 실습입니다.',
        detailedDescription:
            '(주)와이즈넛 겨울인턴십 프로젝트에서 진행한, 수집된 텍스트의 word2vec 및 토픽모델링등의 자연어 전처리 실습 입니다.',
        tags: 'Python',
        term: '2021.01 ~ 2021.02',
        page: 'prjects/',
        // page : "projects/"
    },
    {
        title: '',
        src: '',
        description: '',
        detailedDescription: '',
        tags: '',
        term: '',
        page: '',
    },
];

const trackListMap = {
    Javascript: [
        'Javascript',
        'Typescript',
        'Node.js',
        'React',
        'Angular',
        'Nest.js',
    ],
    Java: ['Java', 'Kotlin', 'Spring Boot', 'Spring', 'JPA', 'Spring WebFlux'],
    DBMS: ['SQL', 'Oracle', 'MySQL', 'MongoDB', 'GraphQL'],
    Backend: ['C++', 'Basic', 'Kafka', 'Redis'],
    DevOps: ['Go', 'Linux', 'Docker', 'Kubernetices', 'AWS'],
    'Data Science': [
        'Python',
        'Tensorflow',
        'Pytorch',
        'Data Science',
        'Scrapping',
    ],
    Graphics: ['OpenGL', 'WebGL', 'Three.js', 'D3.js'],
};

const trackLists = [
    'Javascript',
    'Java',
    'DBMS',
    'Backend',
    'DevOps',
    'Data Science',
    'Graphics',
];

export default function Info() {
    const [updateDate, setUpdateDate] = useState('1995-01-01');

    useEffect(() => {
        getPlansUpdatedDate().then(data => setUpdateDate(data));
    }, []);

    return (
        <div className={styles.content}>
            <Introduction markdown_content={markdown_content} />
            <Experience projects={projects} />
            <Skills
                skills={skills}
                levelDescriptions={levelDescriptions}
                colors={colors}
            />
            <Study
                trackLists={trackLists}
                trackListMap={trackListMap}
                updateDate={updateDate}
            />
        </div>
    );
}
