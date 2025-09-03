import styles from './index.module.css';

export default function ({
    data,
    height,
    vwidth,
    radius,
    vmargin,
    mapper,
    itemWidth,
    scale,
    upper,
    lower,
}) {
    if (!height || !mapper) {
        return <></>;
    }

    const align = lower ? `${styles.lower}` : upper ? `${styles.upper}` : '';

    return (
        <>
            {height && mapper && (
                <div
                    className={`${styles.itemContainer}`}
                    style={{width: vwidth, height: height}}
                >
                    {data.map((d, i) => (
                        <div
                            className={`${styles.item} ${align}`}
                            key={i}
                            style={{
                                left: scale(d) + radius / 2,
                                width: itemWidth(
                                    vwidth,
                                    radius,
                                    vmargin,
                                    data.length,
                                ),
                                height: height,
                            }}
                        >
                            {mapper(d, i)}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
