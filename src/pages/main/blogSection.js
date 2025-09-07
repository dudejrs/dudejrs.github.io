import React from "react";
import BlogContainer from './blog';
import Section from './section';
import styles from './blogSection.module.css';

export default function BlogSection({className}) {
    return (
        <Section className={`${className}`} title="Recent Post">
            <div className={`${styles.container}`}>
                {Array.from({length: 3}, (_, i) => i).map((_, i) => (
                    <BlogContainer
                        className={`${styles.item}`}
                        title={`Title ${i}`}
                        key={i}
                    />
                ))}
            </div>
        </Section>
    );
}
