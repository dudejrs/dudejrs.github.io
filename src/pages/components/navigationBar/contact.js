import styles from './index.module.css';

export default function Contact() {
    return (
        <div className={styles.contacts}>
            <a href="https://dudejrs.tistory.com/">
                <img
                    className={styles.contact_img}
                    src={'img/contact/tistory.svg'}
                />
            </a>
            <a href="https://github.com/dudejrs">
                <img
                    className={styles.contact_img}
                    src={'img/contact/github-mark.svg'}
                />
            </a>
            <a href="mailto:dudejrss@naver.com">
                <img
                    className={styles.contact_img}
                    src={'img/contact/email.png'}
                />
            </a>
        </div>
    );
}
