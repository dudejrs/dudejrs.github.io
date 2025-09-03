import {useEffect, useState} from 'react';

import Table from '../../../../notion/table';
import styles from './index.module.css';

const columns = ['name', '등급/점수', '취득 일자', '발급기관'];
const types = ['title', 'text', 'date', 'text'];
const ratio = [2, 2, 2, 2];

export default function CertificateTable({name, title, certificates = []}) {
    return (
        <div className={`${styles.table}`}>
            {title && <h3 className={`${styles.title}`}>{title}</h3>}
            <Table
                columns={columns}
                types={types}
                data={certificates}
                ratio={ratio}
            />
        </div>
    );
}
