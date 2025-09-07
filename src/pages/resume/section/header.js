import React from 'react';
import styles from './header.module.css';

export default function Header({text}) {
    if (!text) {
        return <></>;
    }

    return <div className={`${styles.container}`}> {text} </div>;
}
