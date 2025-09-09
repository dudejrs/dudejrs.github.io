import React from 'react';
import Section from '../index';
import Item from './item';

import styles from './index.module.css';

const items = [
    {
        date: '2022.09.22',
        name: '정보처리기사',
        organization: '한국산업인력공단',
    },
    {
        date: '2022.12.03',
        name: '빅데이터 분석 기사',
        organization: '한국데이터산업진흥원',
    },
    {
        date: '2022.06.10',
        name: '리눅스 마스터 1급',
        organization: '한국정보통신진흥협회',
    },
    {date: '2022.09.30', name: 'SQLD', organization: '한국데이터산업진흥원'},
    {date: '2023.09.17', name: 'PCCP Lv.2 (Python)', organization: '(주) 그랩'},
    {date: '2023.12.17', name: 'PCCP Lv.2 (Java)', organization: '(주) 그랩'},
];

export default function Certification({header}) {
    return (
        <Section header={header}>
            <div className={`${styles.container}`}>
                {items.map((item, i) => (
                    <Item
                        key={i}
                        date={item.date}
                        name={item.name}
                        organization={item.organization}
                    />
                ))}
            </div>
        </Section>
    );
}
