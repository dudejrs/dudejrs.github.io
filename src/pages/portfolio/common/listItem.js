import React from 'react';
import styles from './list.module.css'
import studyStyles from './study.module.css'

export default function ListItem({title, tags}) {
    return (
        <li className={`${styles.listItem}`}>
            {title}
            <div className={`${studyStyles.numberList}`}>
                {tags &&
                    tags.map((t, i) => (
                        <span className={`${studyStyles.number}`} key={i}>
                            {t}
                        </span>
                    ))}
            </div>
        </li>
    );
}