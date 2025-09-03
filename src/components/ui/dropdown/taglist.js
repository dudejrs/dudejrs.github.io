import {useState, useEffect} from 'react';

import Tag from '../tag';

import styles from './taglist.module.css';

export default function ({names, defaults = [], onTagClick, className}) {
    return (
        <div className={`${styles.container} ${className}`}>
            {names.map((name, i) => (
                <Tag
                    name={name}
                    key={i}
                    onClick={e => {
                        onTagClick && onTagClick(name);
                    }}
                    className={`${styles.tag}`}
                />
            ))}
        </div>
    );
}
