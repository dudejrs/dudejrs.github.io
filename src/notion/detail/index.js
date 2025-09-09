import React, {useCallback} from 'react';

import Component from '../component';
import ValueEntry from '../valueEntry';

import styles from './detail.module.css';

export default function Detail({className, children, data, types}) {
    const renderChild = useCallback(() => {
        return React.Children.map(children, child => {
            return React.cloneElement(child, {
                data: data,
            });
        });
    });

    return (
        <div className={`${styles.container} ${className}`}>
            <div className={`${styles.subContainer}`}>
                {Object.keys(data).map((key, i) => {
                    return (
                        <div
                            className={`${styles.component} ${styles[types[key]]}`}
                            key={i}
                        >
                            <Component
                                className={`${styles[`${types[key]}_key`]} ${styles.key} ${styles.hoveringbox}`}
                                type={types[key]}
                            >
                                {' '}
                                {key}{' '}
                            </Component>
                            <ValueEntry
                                className={`${styles[`${types[key]}_value`]} ${styles.value} ${styles.hoveringbox}`}
                                type={types[key]}
                                data={data[key]}
                            >
                                {' '}
                            </ValueEntry>
                        </div>
                    );
                })}
            </div>
            <div className={styles.children}>{renderChild()}</div>
        </div>
    );
}
