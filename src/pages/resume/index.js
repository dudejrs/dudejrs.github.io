import React from 'react';
import {Printable, Page} from '../../components/ui/printable';
import Info from './section/info';
import AcademicCareer from './section/academicCareer';
import Certification from './section/certification';
import Etc from './section/etc';

import styles from './index.module.css';

function Resume() {
    return (
        <div className={styles.container}>
            <Printable filename="resume" layout="portrait">
                <Page className={`${styles.page}`}>
                    <Info />
                    <AcademicCareer header={'학력'} />
                    <Certification header={'자격증'} />
                    <Etc header={'기타'} />
                </Page>
            </Printable>
        </div>
    );
}

export default Resume;
