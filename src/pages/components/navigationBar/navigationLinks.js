import React from 'react';
import NavigationLinkItem from './navigationLinkItem';

import styles from './index.module.css';

export default function NavigationLinks({links, onMouseOver, onMouseOut}) {
    return (
        <div className={styles.links}>
            {Array.isArray(links) &&
                links.map(
                    (item, i) =>
                        item.visible && (
                            <NavigationLinkItem
                                item={item}
                                i={i}
                                key={i}
                                onMouseOver={onMouseOver}
                                onMouseOut={onMouseOut}
                            />
                        ),
                )}
        </div>
    );
}
