import styles from './index.module.css';

export default function ({
    data,
    width,
    vheight,
    vmargin,
    radius,
    mapper,
    scale,
    itemHeight,
    left,
    right,
}) {
    if (!width || !mapper) {
        return <></>;
    }

    const align = left ? `${styles.left}` : right ? `${styles.right}` : '';

    return (
        <>
            {width && mapper && (
                <div
                    className={`${styles.itemContainer}`}
                    style={{width: width, height: vheight}}
                >
                    {data.map((d, i) => (
                        <div
                            className={`${styles.item} ${styles.center} ${align}`}
                            key={i}
                            style={{top: scale(d)}}
                        >
                            {mapper(d, i)}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
