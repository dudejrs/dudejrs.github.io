import React from 'react';
import styles from './printable.module.css';

export default function Page({className, children}) {
    return <div className={`${className} ${styles.section}`}>{children}</div>;
}
