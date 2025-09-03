import {useState, useEffect} from 'react';
import * as d3 from 'd3';

import VerticalLine from './line';
import BehindItem from './behindItem';
import CenterItem from './centerItem';
import Point from '../point';

import {applyRatio} from '../util';
import {Context} from './widthsContext';

import styles from './index.module.css';

function itemHeight(height, radius, vmargin, length) {
    const h = (height - 2 * radius - 2 * vmargin) / length;
    return h - radius;
}

export default function ({
    data,
    ratios,
    width,
    height,
    margin = 0,
    vmargin = 10,
    bmargin = 10,
    radius = 9,
    stroke = 6,
    color = '#302eff',
    mapper,
    className,
    ...props
}) {
    if (!data) {
        return;
        <div style={{width: width, margin: margin}}></div>;
    }

    const vheight = height - margin * 2;
    const vwidth = Math.max(radius * 2, stroke);
    const [widths, setWidths] = useState(
        applyRatio(width - 2 * margin - vwidth - bmargin, ratios),
    );

    const scale = d3
        .scalePoint()
        .domain([...data, {}])
        .range([radius + vmargin, vheight - radius - vmargin]);

    useEffect(() => {
        setWidths(applyRatio(width - 2 * margin - vwidth - bmargin, ratios));
    }, [width]);

    return (
        <div
            className={`${className} ${styles.container}`}
            style={{height: height, margin: margin}}
        >
            <Context.Provider value={{setWidths}}>
                <BehindItem
                    data={data}
                    width={widths[0]}
                    vheight={vheight}
                    vmargin={vmargin}
                    radius={radius}
                    mapper={mapper[0]}
                    scale={scale}
                    itemHeight={itemHeight}
                    right={true}
                    {...props}
                />
                <CenterItem
                    data={data}
                    width={widths[1]}
                    vheight={vheight}
                    vmargin={vmargin}
                    radius={radius}
                    mapper={mapper[1]}
                    scale={scale}
                    itemHeight={itemHeight}
                    right={true}
                    {...props}
                />
                <VerticalLine
                    width={vwidth}
                    height={vheight}
                    color={color}
                    stroke={stroke}
                    margin={bmargin}
                >
                    {data.map((d, i) => (
                        <Point
                            key={i}
                            color={color}
                            cx={vwidth / 2}
                            cy={scale(d)}
                            radius={radius}
                            stroke={(stroke * 2) / 3}
                        />
                    ))}
                </VerticalLine>
                <CenterItem
                    data={data}
                    width={widths[2]}
                    vheight={vheight}
                    vmargin={vmargin}
                    radius={radius}
                    mapper={mapper[2]}
                    scale={scale}
                    itemHeight={itemHeight}
                    left={true}
                    {...props}
                />
                <BehindItem
                    data={data}
                    width={widths[3]}
                    vheight={vheight}
                    vmargin={vmargin}
                    radius={radius}
                    mapper={mapper[3]}
                    scale={scale}
                    itemHeight={itemHeight}
                    left={true}
                    {...props}
                />
            </Context.Provider>
        </div>
    );
}
