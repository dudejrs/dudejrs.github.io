import React from 'react';
import styles from '../index.module.css';
import {Tag} from '../../../../../components/ui';
import {month} from '../util';

export default function Project({d, i}) {
    return (
        <div key={i} className={`${styles.container} ${styles.vertical}`}>
            <h4> {d['이름']}</h4>
            <div className={`${styles.subcontainer} ${styles.vertical}`}>
                <p> {month(d['기간'])} </p>
                <div className={`${styles.taglist}`}>
                    {Array.isArray(d['기술']) &&
                        d['기술'].map((d, i) => (
                            <Tag key={i} name={d} className={`${styles.tag}`} />
                        ))}
                </div>
            </div>
        </div>
    );
}
