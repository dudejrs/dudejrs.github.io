import styles from './printable.module.css';

export default function ({className, children}) {
    return <div className={`${className} ${styles.section}`}>{children}</div>;
}
