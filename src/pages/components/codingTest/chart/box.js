import React from 'react';
import styles from './box.module.css';

export default function Box({
    width = '350px',
    height = '250px',
    className,
    children,
}) {
    return (
        <div
            className={`${styles.container} ${className}`}
            style={{width: width, minHeight: height}}
        >
            {children}
        </div>
    );
}
