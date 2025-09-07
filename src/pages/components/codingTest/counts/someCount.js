import React from 'react';
import styles from './totalDesignCounts.module.css';

export default function SomeCount({className, children, name, count}) {
    return (
        <div className={`${className}`}>
            <div className={styles.item}>
                {' '}
                <b> {name} 문제수 : </b> <span> {count} </span>{' '}
            </div>
            {children}
        </div>
    );
}
