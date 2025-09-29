import PageWrapper from './pageWrapper';
import React from 'react';
import styles from './experience.module.css';

export default function Experience({
    title = '경험 제목을 입력해주세요',
    experiences= [],
    children,
    className,
}) {
    return (
        <PageWrapper title={`[경험] ${title}`}>
            <div className={`${styles.experiences} ${className}`}>
                {experiences.map((experience, i) => (
                    <div className={styles.expereince} key={i}>
                        <div className={styles.name}>{experience.name}</div>
                        <div>
                            <b >기간</b>
                            <p className={styles.light}>{experience.period}</p>
                        </div>
                        <div>
                            <b>내용</b>
                            <p className={styles.light}> {experience.content} </p>
                        </div>
                        <div>
                            <b>배운점</b>
                            <ul className={styles.light}>
                                {experience.takeaways.map((t, i) => (
                                    <li key={i}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                {children}
            </div>
        </PageWrapper>
    );
}
