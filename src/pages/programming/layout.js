import React from 'react';
import {useEffect, useState} from 'react';

import {NavLink} from 'react-router-dom';
import {getPracticeUpdateTime} from '../../../src/domain/codingPractice';

import styles from './layout.module.css';

export default function Layout({programmingLanguages, title, children}) {
    const [date, setDate] = useState('');

    useEffect(() => {
        getPracticeUpdateTime().then(data => setDate(data));
    }, []);

    const className = ({isActive}) =>
        isActive ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`;

    return (
        <div className={`${styles.container}`}>
            <h1 className={`${styles.title}`}> {title}</h1>
            <div className={`${styles.nav}`}>
                <NavLink className={`${styles.navItem}`} to="/practice">
                    전체
                </NavLink>
                {programmingLanguages.map((lang, i) => (
                    <NavLink
                        className={className}
                        key={i}
                        to={`/practice/${i}`}
                    >
                        {lang}
                    </NavLink>
                ))}
                <div className={`${styles.footercontainer}`}>
                    <p>
                        last updated:
                        <span> {date} </span>
                    </p>
                </div>
            </div>
            {children}
        </div>
    );
}
