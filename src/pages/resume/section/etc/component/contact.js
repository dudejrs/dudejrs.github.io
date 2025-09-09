import React from 'react';
import styles from './contact.module.css';

export default function Contact({items}) {
    return (
        <ul className={styles.container}>
            {items.map((item, i) => (
                <li key={i} className={styles.item}>
                    {' '}
                    <img src={item.img} className={styles.img} />{' '}
                    <p className={styles.text}>{item.text}</p>{' '}
                </li>
            ))}
        </ul>
    );
}
