import React from 'react';
import NavigationLinkItem from './navigationLinkItem';

import styles from './index.module.css';

export default function NavigationSubLinks({links, onMouseOver, onMouseOut}) {
    return (
        <div
            className={`${styles.links} ${styles.sub_container}`}
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
        >
            {Array.isArray(links) &&
                links.map((item, i) => (
                    <NavigationLinkItem item={item} i={i} key={i} />
                ))}
        </div>
    );
}
