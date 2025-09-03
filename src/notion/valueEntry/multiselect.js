import {Tag} from '../../components';
import styles from './index.module.css';

export default function MultiSelect({data}) {
    return (
        <>
            {data.map((tag, i) => (
                <Tag key={i} name={tag} className={styles.multiselect_item} />
            ))}
        </>
    );
}
