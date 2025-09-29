import React, {useEffect, useState} from 'react';
import Section from '../index';
import Table from './table';

import styles from './index.module.css';
import getCertificates from '../../../../domain/certificates';

export default function Certification({
                                          header,
    filterList= []
}) {
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        getCertificates()
            .then(data => data.filter(c => filterList.includes(c["name"]) ? undefined : c))
            .then(setCertifications);
    }, []);

    return (
        <Section header={header}>
            <div className={`${styles.container}`}>
                <Table certifications={certifications} />
            </div>
        </Section>
    );
}
