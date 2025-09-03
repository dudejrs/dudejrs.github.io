import {Tag} from '../../../../../components/ui';

import styles from '../index.module.css';
import {toString} from '../util';

export default function ({d, i}) {
    return (
        <div key={i} className={`${styles.container} ${styles.vertical}`}>
            <h4> {d['title']}</h4>
            <div className={`${styles.subcontainer} ${styles.vertical}`}>
                <p> {toString(d['기간'])} </p>
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
