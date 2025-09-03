import styles from '../index.module.css';
import {Tag} from '../../../../../components/ui';
import {month} from '../util';

export default function ({d, i}) {
    return (
        <div key={i} className={`${styles.container} ${styles.vertical}`}>
            <h4> {d['title']}</h4>
            <div className={`${styles.subcontainer} ${styles.vertical}`}>
                <p className={`${styles.taglist}`}> {month(d['기간'])} </p>
                <div className={`${styles.taglist}`}>
                    {Array.isArray(d['Tag']) &&
                        d['Tag'].map((d, i) => (
                            <Tag key={i} name={d} className={`${styles.tag}`} />
                        ))}
                </div>
            </div>
        </div>
    );
}
