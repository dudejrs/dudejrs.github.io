import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Section from './section';

import styles from './introduction.module.css';

export default function Introduction({className, markdown_content}) {
    return (
        <Section
            className={`${styles.info_container} ${className}`}
            title={`Introduction`}
        >
            <ReactMarkdown
                children={markdown_content}
                remarkPlugins={[remarkGfm]}
            />
            <div className={styles.contact_container}>
                <a href="https://dudejrs.tistory.com/">
                    <img
                        className={styles.contact_img}
                        src={'img/contact/tistory.svg'}
                    />
                    <span>https://dudejrs.tistory.com/</span>
                </a>
                <a href="https://github.com/dudejrs">
                    <img
                        className={styles.contact_img}
                        src={'img/contact/github-mark.svg'}
                    />
                    <span>https://github.com/dudejrs</span>
                </a>
                <a href="mailto:dudejrss@naver.com">
                    <img
                        className={styles.contact_img}
                        src={'img/contact/email.png'}
                    />
                    <span>dudejrss@naver.com</span>
                </a>
            </div>
        </Section>
    );
}
