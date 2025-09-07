import React from 'react';
import styles from '../index.module.css';
import {Tag} from '../../../../../components/ui';
import {month} from '../util';

export default function Plan({i, d}) {
    return (
        <div key={i} className={`${styles.container} `}>
            <div className={`${styles.subcontainer} ${styles.horizontal}`}>
                <h4> {d['title']}</h4>
                <p className={`${styles.taglist}`}> {month(d['기간'])} </p>
            </div>
            <div className={`${styles.taglist}`}>
                {Array.isArray(d['Tag']) &&
                    d['Tag'].map((d, i) => (
                        <Tag key={i} name={d} className={`${styles.tag}`} />
                    ))}
            </div>
        </div>
    );
}
