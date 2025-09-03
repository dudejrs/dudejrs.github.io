import styles from './contact.module.css';

export default function ({items}) {
    return (
        <ul className={styles.container}>
            {items.map(item => (
                <li className={styles.item}>
                    {' '}
                    <img src={item.img} className={styles.img} />{' '}
                    <p className={styles.text}>{item.text}</p>{' '}
                </li>
            ))}
        </ul>
    );
}
