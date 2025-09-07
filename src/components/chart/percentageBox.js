import React from 'react';
import * as d3 from 'd3';

function stackElement(data) {
    let ret = [];
    let acc = 0;

    for (let d of data) {
        acc += d;
        ret.push(acc);
    }

    return ret;
}

export default function PercentageBox({
    children,
    className,
    data,
    width,
    height,
    padding = 10,
    colors,
    colorFunc,
}) {
    const x = d3
        .scaleLinear()
        .domain([0, d3.sum(data)])
        .range([padding, width - padding]);

    const x_ = d3
        .scaleLinear()
        .domain([0, d3.sum(data)])
        .range([0, width - 2 * padding]);

    const y = height - 2 * padding;
    const stack = stackElement(data);

    if (!colors && !colorFunc) {
        colorFunc = d3.scaleOrdinal(d3.schemeTableau10);
    }

    if (colors && !colorFunc) {
        colorFunc = i => {
            return colors[i];
        };
    }

    return (
        <svg className={`${className}`} width={width} height={height}>
            <g>
                {stack.map((d, i) => (
                    <rect
                        key={i}
                        x={x(d) - x_(data[i])}
                        y={padding}
                        height={y}
                        width={x_(data[i])}
                        fill={colorFunc(i)}
                    />
                ))}
            </g>
            {children}
        </svg>
    );
}
