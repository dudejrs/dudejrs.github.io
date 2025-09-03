import {useEffect, useState} from 'react';

import Table from '../../../../notion/table';
import styles from './index.module.css';

const columns = ['이름', '태그', '기간', '요약'];
const types = ['title', 'multiselect', 'date', 'text'];
const ratio = [2, 2, 2, 2];

export default function PracticeTable({name, title, practices = []}) {
    return (
        <div className={`${styles.table}`}>
            {title && <h3 className={`${styles.title}`}>{title}</h3>}
            <Table
                columns={columns}
                types={types}
                data={practices}
                ratio={ratio}
            />
        </div>
    );
}
