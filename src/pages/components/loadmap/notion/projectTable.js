import {useEffect, useState} from 'react';

import Table from '../../../../notion/table';
import styles from './index.module.css';

const columns = ['이름', '기간', '기술', '요약(50자)'];
const types = ['title', 'date', 'multiselect', 'text'];
const ratio = [1, 1, 1, 3];

export default function ProjectTable({name, title, projects = []}) {
    return (
        <div className={`${styles.table}`}>
            {title && <h3 className={`${styles.title}`}>{title}</h3>}
            <Table
                columns={columns}
                types={types}
                data={projects}
                ratio={ratio}
            />
        </div>
    );
}
