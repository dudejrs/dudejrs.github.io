import PageWrapper from './pageWrapper';
import React, {useState, useEffect} from 'react';
import {gatCategories} from '../../../domain/categories';
import {VerticalTimeLine} from '../../../components/ui';
import styles from './study.module.css';

function filterData(filters, status) {
    let newFilters = filters.concat(['강의', '프로젝트']);
    let newStatus = ['Not started', 'Suspend'].filter(s => !status.includes(s));
    return function (data) {
        return data.filter(
            d =>
                d &&
                !newStatus.includes(d['Status']) &&
                !newFilters.some(filter => d['title'].match(filter)),
        );
    };
}

function retrieveData(data) {
    return data.map(d => d['계획']).reduce((a, b) => a.concat(b), []);
}

export default function Study({
    on = '공부한 내용',
    status = [],
    categories = [],
    filters = [],
    direction = 'row',
    grow = false,
    children,
    className,
}) {
    const [data, setData] = useState(categories);
    const planMapper = [
        undefined,
        (d, i) => {
            if (!d || !d['기간'] || !d['기간']['start'] || !d['기간']['end']) {
                return <></>;
            }
            return (
                <div className={`${styles.term}`} key={i}>
                    {' '}
                    {`${d['기간'].start.slice(0, 10)} ~ ${d['기간'].end.slice(0, 10)}`}{' '}
                </div>
            );
        },
        (d, i) =>
            d && (
                <p className={`${styles.planNameContainer}`}>
                    {' '}
                    <span className={`${styles.planName}`}>
                        {d['title']}{' '}
                    </span>{' '}
                    <span className={styles.dot}></span>{' '}
                    <span className={styles.number}>{i + 1}</span>
                </p>
            ),
        undefined,
    ];

    useEffect(() => {
        gatCategories(categories)
            .then(retrieveData)
            .then(filterData(filters, status))
            .then(data =>
                data.sort(
                    (d1, d2) =>
                        new Date(d1['기간'].end) - new Date(d2['기간'].end),
                ),
            )
            .then(data => setData(data));
    }, []);

    return (
        <PageWrapper className={className} title={`[학습] ${on}`}>
            <div
                className={`${direction === 'column' ? styles.flexColumn : styles.flexRow} ${grow ? styles.flexGrow : ''}`}
            >
                {Array.isArray(data) && data.length > 0 && (
                    <div className={styles.timelineContainer}>
                        {Array.isArray(data) && data.length > 0 && (
                            <VerticalTimeLine
                                data={data}
                                width={500}
                                height={450}
                                mapper={planMapper}
                                ratio={1.5}
                                ratios={[0, 0.5, 2, 0]}
                                bmargin={50}
                                stroke={2}
                                radius={4}
                                color={'#aaa'}
                                minSize={[1000, 500]}
                                className={`${styles.timeline}`}
                            />
                        )}
                    </div>
                )}
                {children}
            </div>
        </PageWrapper>
    );
}
