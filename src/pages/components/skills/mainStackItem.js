import React from 'react';
import SubStackItem from './subStackItem';

import styles from './mainStackItem.module.css';

function generateStackItems(items, levels, colors) {
    if (!items || !Array.isArray(items)) return <div></div>;

    if (typeof items[0] == 'string')
        return <SubStackItem items={items} levels={levels} colors={colors} />;

    if (typeof items[0] == 'object')
        return items.map(subStack => (
            <SubStackItem
                key={subStack.title}
                title={subStack.title}
                items={subStack.items}
                levels={subStack.levels}
                colors={colors}
            />
        ));

    return <div></div>;
}

export default function MainStackItem({
    children,
    title,
    items,
    levels,
    colors,
}) {
    return (
        <li className={styles.mainStackItem}>
            <span className={styles.title}> {title} </span>
            {children}
            {Array.isArray(items) && generateStackItems(items, levels, colors)}
        </li>
    );
}
