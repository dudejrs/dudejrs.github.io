import React from 'react';
import {useState, useCallback} from 'react';

import Contact from './contact';
import Title from './title';
import NavigationLinks from './navigationLinks';
import NavigationSubLinks from './navigationSubLinks';

import styles from './index.module.css';

export default function NavigationBar({title, navigationList}) {
    const [isClicked, setIsClicked] = useState(false);
    const [sublinks, setSublinks] = useState(undefined);
    let timerID;

    const onMouseOver = useCallback(s => {
        if (timerID && sublinks) {
            clearTimeout(timerID);
            return;
        }

        setIsClicked(true);
        setSublinks(s);
    });

    const onMouseOut = useCallback(() => {
        if (timerID) clearTimeout(timerID);
        timerID = setTimeout(() => {
            setIsClicked(false);
            setSublinks(undefined);
            timerID = undefined;
        }, 1000);
    });

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Title title={title} />
                <NavigationLinks
                    links={navigationList}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                />
                <Contact />
            </div>
            {isClicked && Array.isArray(sublinks) && (
                <NavigationSubLinks
                    links={sublinks}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                />
            )}
        </div>
    );
}
