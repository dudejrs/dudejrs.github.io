import React from 'react';
import {useEffect, useRef, useState} from 'react';
import styles from './detailedProject.module.css';
import {Tag} from '../../../../components';

export default function DetailedProject({
    className,
    src,
    title,
    description,
    page,
    tags,
    term,
    onClick,
}) {
    if (!src) src = 'img/experience/default_background.png';

    const Ref = useRef();
    const [imgWidth, setImgWidth] = useState(0);

    useEffect(() => {
        const curWidth = Ref.current.offsetWidth;
        let targetWidth = 0;
        if (curWidth > 600) {
            targetWidth = curWidth / 2;
        } else if (curWidth > 480) {
            targetWidth = curWidth / 3;
        }
        setImgWidth(Math.floor(targetWidth));
    });

    return (
        <div className={`${className} ${styles.container}`} ref={Ref}>
            <img
                className={styles.icon}
                src="img/experience/exit_icon2.png"
                onClick={() => onClick(false)}
            />
            <img className={styles.img} src={src} style={{width: imgWidth}} />
            <div className={styles.content}>
                <span className={styles.title}>
                    {' '}
                    <a href={page}>{title}</a>{' '}
                </span>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
                <div className={styles.tags}>
                    {tags.map((tag, i) => (
                        <Tag key={i} name={tag} />
                    ))}
                </div>
                <span className={styles.term}>{term}</span>
            </div>
        </div>
    );
}
