import styles from './list.module.css';
import React from 'react';

export default function List({title, children}) {
    return (
        <div className={styles.container}>
            <h4 className={`${styles.listTitle}`}> {title} </h4>
            <ul className={`${styles.list}`}> {children}</ul>
        </div>
    );
}