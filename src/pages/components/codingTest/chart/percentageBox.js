import React from 'react';
import {PercentageBox} from '../../../../components/chart';
import Legend from './legend';
import Box from './box';

import styles from './percentageBox.module.css';

export default function CodingTestPercentageBox({
    data,
    title,
    items,
    colors,
    className,
}) {
    if (!colors) {
        colors = ['#d2d2d2', '#b3d8e7', '#80bed7', '#4da4c7'];
    }
    return (
        <Box className={`${styles.container} ${className}`}>
            <h4 className={`${styles.title}`}>{title}</h4>
            <PercentageBox
                width={210}
                height={30}
                padding={7.5}
                data={data}
                colors={colors}
            />
            <Legend
                items={items}
                colors={colors}
                className={styles.legend}
                rem={0.4}
            />
        </Box>
    );
}
