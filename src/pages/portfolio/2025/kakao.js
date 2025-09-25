import React from 'react';
import {Printable, Page} from '../../../components/ui/printable';
import styles from './kakao.module.css';

function PageWrapper({
    title = '타이틀을 입력해주세요.',
    titleDescription = '',
    children,
}) {
    return (
        <Page className={styles.page}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
                {titleDescription && (
                    <div className={styles.titleDescription}>
                        {titleDescription}
                    </div>
                )}
            </div>
            <div>{children}</div>
        </Page>
    );
}

function Study({on = '공부한 내용'}) {
    return <PageWrapper title={`[학습] ${on}`}></PageWrapper>;
}

function Experience({title = '경험 제목을 입력해주세요'}) {
    return <PageWrapper title={`[경험] ${title}`}></PageWrapper>;
}

export default function Kakao() {
    return (
        <Printable filename="2025_카카오_포트폴리오" layout={'landscape'}>
            <PageWrapper title={'자기소개'}>
                <div></div>
            </PageWrapper>
            <Study on={'문제 해결력'} />
            <Study on={'Spring / Node.js'} />
            <Study on={'OOP / FP'} />
            <Study on={'DBMS'} />
            <Study on={'정보보안'} />
            <Study on={'AWS, Docker'} />
            <Experience title={'네이버 부스트 캠프'} />
            <Experience title={'개인 프로젝트'} />
        </Printable>
    );
}
