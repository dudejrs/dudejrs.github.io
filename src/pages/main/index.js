import React from 'react';
import {useState} from 'react';

import Section from './section';
import QuarterTimeline from '../timeline/quarter';
import MonthTimeline from '../timeline/month';

import {Tooltip} from '../../components/ui';

import styles from './index.module.css';

function Title({title}) {
    return (
        <div className={`${styles.title}`}>
            {title}
            <Tooltip position={'top'} widthpx={'300px'}>
                <div className={`${styles.tooltipContent}`}>
                    {' '}
                    월/분기별 공부하고 경험한 내역입니다.{' '}
                </div>
            </Tooltip>
        </div>
    );
}

export default function Main() {
    const [activity, setActivity] = useState(0);

    return (
        <div className={styles.container}>
            <Section title={<Title title={`Activites`} />}>
                <div className={`${styles.tab}`}>
                    <div
                        className={
                            activity == 0
                                ? `${styles.active}`
                                : `${styles.deactive}`
                        }
                        onClick={() => setActivity(0)}
                    >
                        {' '}
                        분기{' '}
                    </div>
                    <div
                        className={
                            activity == 1
                                ? `${styles.active}`
                                : `${styles.deactive}`
                        }
                        onClick={() => setActivity(1)}
                    >
                        {' '}
                        월{' '}
                    </div>
                </div>
                {activity == 0 && <QuarterTimeline />}
                {activity == 1 && <MonthTimeline />}
            </Section>
            <Section title="Github stats" className={`${styles.githubStats}`}>
                <img
                    className={styles.githubStatsImg}
                    src="https://ghchart.rshah.org/dudejrs"
                />
            </Section>
        </div>
    );
}
