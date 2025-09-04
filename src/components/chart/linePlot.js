import React from 'react'

import * as d3 from 'd3';

function getX(type, axis, data, margin, width) {
    if (axis && axis.length) {
        switch (type) {
            case 'time':
                return d3.scaleTime(
                    [new Date(axis[0]), new Date(axis[axis.length - 1])],
                    [margin.left, width - margin.right],
                );
            default:
        }
    }

    return d3.scaleLinear(
        [0, data.length - 1],
        [margin.left, width - margin.right],
    );
}

function refineUndefined(data) {
    let d = [...data];
    let cur = 0;

    for (let i = 1; i < d.length; i++) {
        if (!d[i]) {
            d[i] = cur;
        } else {
            cur = d[i];
        }
    }

    return d;
}

export default function LinePlot ({
    data,
    type,
    axis,
    width,
    height,
    margin,
    children,
    color = '#565656',
    pointRadius = 2.5,
}) {
    if (!axis) {
        axis = [...Object(Array(data.length)).keys()];
    }

    const x = getX(type, axis, data, margin, width);
    const y = d3.scaleLinear(d3.extent(data), [
        height - margin.bottom,
        margin.top,
    ]);

    const line = d3.line((d, i) => x(axis[i]), y);

    return (
        <svg width={width} height={height}>
            <path
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                d={line(refineUndefined(data))}
            />
            <g fill={color} stroke={color} strokeWidth="1.5">
                {refineUndefined(data).map((d, i) => (
                    <circle key={i} cx={x(axis[i])} cy={y(d)} r={pointRadius} />
                ))}
            </g>
            {children}
        </svg>
    );
}
