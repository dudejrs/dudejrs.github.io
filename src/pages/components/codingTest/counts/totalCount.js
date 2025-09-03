import styles from './totalCount.module.css';

export default function TotalCounts({className, total}) {
    return (
        <div className={`${className} `}>
            <div className={styles.totalContainerItem}>
                {' '}
                <b> 총 푼 문제수 : </b> <span> {total.count} </span>{' '}
            </div>
            <div className={styles.totalContainerItem}>
                {' '}
                <b> 총 반복수 : </b> <span> {total.repetition}</span>{' '}
            </div>
        </div>
    );
}
