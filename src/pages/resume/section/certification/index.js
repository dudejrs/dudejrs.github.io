import React, {useEffect, useState} from 'react';
import Section from '../index';
import Table from './table';

import styles from './index.module.css';
import getCertificates from '../../../../domain/certificates';

export default function Certification({header}) {
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        getCertificates().then(setCertifications);
    }, []);

    return (
        <Section header={header}>
            <div className={`${styles.container}`}>
                <Table certifications={certifications} />
            </div>
        </Section>
    );
}
