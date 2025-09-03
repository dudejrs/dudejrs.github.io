import {useState, useEffect} from 'react';

import {getTotalCountByProgrammingLanguages} from '../../../../domain/codingPractice';

import Color from '../../../../components/color';

import Legend from './legend';
import DonutChart from './donutChart';

import styles from './legendItem.module.css';

function genterateItems(item, width = 100) {
    return (
        <div className={`${styles.itemContainer}`} style={{minWidth: width}}>
            <span className={`${styles.itemLanguage}`}>{item['language']}</span>
            <span className={`${styles.itemCount}`}>{item['count']}</span>
        </div>
    );
}

export default function ({
    width,
    height,
    lengendWidth,
    legendHeight,
    radius,
    rem,
    layout,
    programmingLanguages,
    className,
}) {
    const [data, setData] = useState([]);
    const [items, setItems] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        getTotalCountByProgrammingLanguages(programmingLanguages).then(t => {
            t = t.filter(k => k['count']);
            setData(t.map(lang => lang['count']));
            setItems(t.map(lang => genterateItems(lang, lengendWidth)));
            setColors(t.map(lang => Color.getColorLightBy(lang['language'])));
        });
    }, []);

    return (
        <DonutChart
            layout={layout}
            title={
                <>
                    프로그래밍 언어 별<br /> 풀은 문제의 수
                </>
            }
            width={width}
            radius={radius}
            data={data}
            items={items}
            programmingLanguages={programmingLanguages}
            colors={colors}
            rem={rem}
            className={className}
            legendHeight={legendHeight}
        />
    );
}
