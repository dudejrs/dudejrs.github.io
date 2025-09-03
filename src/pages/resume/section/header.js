import styles from './header.module.css';

export default function ({text}) {
    if (!text) {
        return <></>;
    }

    return <div className={`${styles.container}`}> {text} </div>;
}
