import styles from './legend.module.css';

export default function Legend({className, descriptions, colors}) {
    return (
        <div className={className}>
            {descriptions &&
                descriptions.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div
                            className={styles.picker}
                            style={{backgroundColor: colors[index]}}
                        ></div>
                        {item}
                    </div>
                ))}
        </div>
    );
}
