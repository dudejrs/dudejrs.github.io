import React from 'react';
import BlogSection from './blogSection';
import Section from './section';

import styles from './index.module.css';

export default function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.carousell}></div>
            <BlogSection className={styles.section} />
            <Section
                title="Github stats"
                className={`${styles.section} ${styles.githubStats}`}
            >
                <img src="https://ghchart.rshah.org/dudejrs" />
            </Section>
        </div>
    );
}
