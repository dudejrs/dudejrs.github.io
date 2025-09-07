import React from 'react';
export default function Point({
    radius = 9,
    cx = 0,
    cy = 0,
    stroke = 6,
    _height = 9,
    _style,
    color,
}) {
    return (
        <g fill={'#fff'} stroke={color} strokeWidth={`${stroke}px`}>
            <circle cx={cx} cy={cy} r={radius - stroke / 2} />
        </g>
    );
}
