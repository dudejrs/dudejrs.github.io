import React from 'react';
import {useState} from 'react';

import Popup from './popup';

import styles from './index.module.css';

export default function Dropdown({
    width = '100%',
    _height = '30px',
    content,
    children,
    className,
    _clicked = false,
}) {
    const [clicked_, setClicked] = useState(false);

    return (
        <div
            className={`${styles.container} ${className}`}
            style={{width: width}}
            onClick={() => setClicked(!clicked_)}
        >
            {content}
            {clicked_ && (
                <Popup content={content} setClicked={setClicked}>
                    {children}
                </Popup>
            )}
        </div>
    );
}
