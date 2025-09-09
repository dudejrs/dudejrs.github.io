import React from 'react';
import {useEffect, useRef} from 'react';

import styles from './index.module.css';

export default function Popup({children, content, setClicked}) {
    const ref = useRef();

    const onClick = e => {
        for (let c of ref.current.children) {
            let rect = c.getBoundingClientRect();
            if (rect.top <= e.clientY && e.clientY <= rect.bottom) {
                if (rect.left <= e.clientX && e.clientX <= rect.right) {
                    return;
                }
            }
        }
        setClicked(false);
    };

    useEffect(() => {
        setTimeout(() => {
            document.children[0].addEventListener('click', onClick);
        }, 125);

        return () => {
            document.children[0].removeEventListener('click', onClick);
        };
    }, []);

    return (
        <div ref={ref} className={`${styles.fakecontainer} ${styles.clicked}`}>
            <div className={`${styles.container}`}>{content}</div>
            <div className={`${styles.subcontainer}`}>{children}</div>
        </div>
    );
}
