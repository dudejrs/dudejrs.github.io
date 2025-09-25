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
                items: ['Node.js', 'Spring', 'FastAPI'],
                levels: [1, 1, 0],
            },
            {
                title: 'Database',
                items: ['Oracle', 'MySQL', 'MongoDB'],
                levels: [1, 0, 0],
            },
            {title: 'Infra', items: ['Linux', 'Aws'], levels: [1, 0]},
            {title: 'Etc', items: ['GraphQL', 'JPA'], levels: [0, 0]},
        ],
    },
    {
        title: 'Frontend',
        items: ['HTML', 'CSS', 'React', 'Next.js'],
        levels: [1, 1, 1, 0],
    },
    {
        title: 'Programing Language',
        items: [
            'Javascript',
            'Java',
            'Python',
            'C++',
            'Kotlin',
            'Go',
            'Typescript',
            'Rust',
            'Swift',
            'Julia',
        ],
        levels: [1, 1, 1, 0, 0, 0, 0, 0, 0],
    },
];

const levelDescriptions = [
    '사용 경험이 있음',
    '학습하고 있는 중임',
    '활용 경험이 많음',
    '사용이 자유로움',
];
const colors = ['#d2d2d2', '#b3d8e7', '#80bed7', '#4da4c7'];

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
    DBMS: ['SQL', 'Oracle', 'MySQL', 'MongoDB'],
    Backend: ['C++', 'Basic', 'Kafka', 'Redis', 'GraphQL'],
    DevOps: ['Go', 'Linux', 'Docker', 'Kubernetes', 'AWS'],
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
            <Experience projects={{}} />
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
