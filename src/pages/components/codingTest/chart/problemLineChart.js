import React from 'react';
import {useState, useEffect} from 'react';

import {getLog} from '../../../../domain/codingPractice';

import LineChart from './lineChart';

const defaultMargin = {
    top: 20,
    right: 20,
    left: 20,
    bottom: 20,
};

const _defaultAxis = {
    left: 50,
    bottom: 50,
    margin: defaultMargin,
};

function getTitle(keyword, lang) {
    switch (keyword) {
        case 'Count':
            return `시간별 총 푼 문제 수`;
        case 'Repetition':
            return `시간별 총 푼 문제 반복 수`;
    }

    return `시간별 총 푼 문제 수 (${lang})`;
}

export default function ProblemLineChart({
    width = 1000,
    day = 365,
    keyword = 'Count',
    height,
    lang,
    className,
}) {
    const [data, setData] = useState([0, 10]);
    const [axis, setAxis] = useState([]);

    useEffect(() => {
        getLog(Date.now(), day).then(t => {
            setData(t.map(d => d));
            setAxis(t.map(d => new Date(d['date'])));
        });
    }, []);

    return (
        <LineChart
            data={data.map(d => d[keyword])}
            axisData={axis}
            type={'time'}
            title={getTitle(keyword, lang)}
            width={width}
            height={height}
            nticks={4}
            axis={{
                left: 50,
                bottom: 50,
                margin: defaultMargin,
                type: 'time',
                tickformat: 'month',
            }}
            className={className}
        />
    );
}
