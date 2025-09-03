import {Tag} from '../../../../../components/ui';

import styles from '../index.module.css';
import {toString} from '../util';

export default function ({d, i}) {
    return (
        <div key={i} className={`${styles.container} `}>
            <h4> {d['이름']}</h4>
            <div className={`${styles.subcontainer} `}>
                <p> {toString(d['기간'])} </p>
            </div>
            <div className={`${styles.taglist}`}>
                {Array.isArray(d['기술']) &&
                    d['기술'].map((d, i) => (
                        <Tag key={i} name={d} className={`${styles.tag}`} />
                    ))}
            </div>
        </div>
    );
}
