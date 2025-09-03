import styles from './index.module.css';

export default function ({
    size = 100,
    _size = 176.14,
    backgroundColor = 'black',
    color = 'white',
    onClick,
    style,
}) {
    return (
        <div className={styles.button} onClick={onClick} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${_size} ${_size}`}
                width={size}
                height={size}
            >
                <circle
                    className="cls-1"
                    cx={_size / 2}
                    cy={_size / 2}
                    r={_size / 2}
                    fill={backgroundColor}
                />
                <path
                    className="cls-2"
                    d="M74.34,56.43,124.8,92.72V82.36L73.28,119.7c-6.19,4.49-.21,14.91,6.06,10.36l51.51-37.34c3.82-2.77,3.85-7.59,0-10.36L80.39,46.07c-6.28-4.51-12.27,5.89-6,10.36Z"
                    fill={color}
                />
            </svg>
        </div>
    );
}
