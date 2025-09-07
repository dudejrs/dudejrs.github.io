import React from 'react';
import styles from './tick.module.css';

export default function Tick({d}) {
    return <div className={`${styles.tick}`}>{d}</div>;
}
