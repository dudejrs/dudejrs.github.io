import styles from './totalDesignCounts.module.css';

export default function SomeCountAndRepetition({className, children, data}) {
    return (
        <div className={`${className}`}>
            <div className={styles.item}>
                {' '}
                <b> {data.name} 문제수/반복수 : </b>{' '}
                <span>
                    {' '}
                    {data.count}/{data.repetition}{' '}
                </span>{' '}
            </div>
            {children}
        </div>
    );
}
