import React from 'react';
import Section from './index';
import {AboutMe} from '../../components/aboutMe';
import styles from './info.module.css';

export default function Info({header}) {
    const name = '김덕영';
    const email = 'dudejrss@naver.com';

    return (
        <Section className={styles.container} header={header}>
            <div className={`${styles.name} ${styles.item}`}> {name} </div>
            <div className={`${styles.email} ${styles.item}`}> {email} </div>
            <div className={`${styles.introduction} ${styles.item}`}>
                {AboutMe.split('\n').map((s,i) => (
                    <p key={i} className={styles.introductionItem}>{s}</p>
                ))}
            </div>
        </Section>
    );
}
