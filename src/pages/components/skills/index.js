import React from 'react';
import MainStackItem from './mainStackItem';
import Legend from './legend';

import styles from './index.module.css';

export default function Skills({className, skills, colors, levelDescriptions}) {
    return (
        <div className={`${styles.container} ${className}`}>
            <ul className={styles.mainStack}>
                {Array.isArray(skills) &&
                    skills.map(skill => (
                        <MainStackItem
                            key={skill.title}
                            title={skill.title}
                            items={skill.items}
                            levels={skill.levels}
                            colors={colors}
                        />
                    ))}
            </ul>
            {Array.isArray(levelDescriptions) && (
                <Legend
                    className={styles.legend}
                    descriptions={levelDescriptions}
                    colors={colors}
                />
            )}
        </div>
    );
}
