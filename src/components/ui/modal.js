import React from 'react';
import styles from './modal.module.css';

export default function Modal({
    id,
    className,
    childClassName,
    name,
    children,
    onClick,
}) {
    return (
        <div className={`${styles.container} ` + className} id={id}>
            <div className={styles.navigation}>
                <img src="img/loadmap/mac_icon2.png" onClick={onClick} />
                <span>{name}</span>
            </div>
            <div className={`${styles.content} ` + childClassName}>
                {children}
            </div>
        </div>
    );
}
