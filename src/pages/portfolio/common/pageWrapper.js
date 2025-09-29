import {Page} from '../../../components/ui/printable';
import styles from '../2025/kakao.module.css';
import React from 'react';

export default function PageWrapper({
                         title = '타이틀을 입력해주세요.',
                         titleDescription = '',
                         children,
                         className = '',
                     }) {
    return (
        <Page className={`${styles.page} ${className}`}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
                {titleDescription && (
                    <div className={styles.titleDescription}>
                        {titleDescription}
                    </div>
                )}
            </div>
            {children}
        </Page>
    );
}