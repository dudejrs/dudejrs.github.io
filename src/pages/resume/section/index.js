import React from 'react';
import styles from './index.module.css';
import Header from './header';

export default function Section({children, className, header}) {
    return (
        <div className={`${styles.section} ${className}`}>
            <Header text={header} />
            {children}
        </div>
    );
}
