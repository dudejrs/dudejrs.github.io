import React from 'react';
import styles from './item.module.css';

export default function Table({certifications}) {
    return (
        <div className={styles.container}>
            {certifications.length > 0 &&
                certifications.map((item, i) => (
                    <React.Fragment key={i}>
                        <div className={`${styles.date} ${styles.cell}`}>
                            {item['취득 일자']['start']}
                        </div>
                        <div className={`${styles.name} ${styles.cell}`}>
                            {item['name']}{' '}
                            <span className={`${styles.grade}`}>
                                {item['등급/점수'] && `/ ${item['등급/점수']}`}
                            </span>
                        </div>
                        <div
                            className={`${styles.organization} ${styles.cell}`}
                        >
                            {item['발급기관']}
                        </div>
                    </React.Fragment>
                ))}
        </div>
    );
}
