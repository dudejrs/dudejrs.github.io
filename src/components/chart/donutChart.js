import React from "react"
import * as d3 from 'd3';

export default function DonutChart ({
    className,
    children,
    data,
    width,
    height,
    radius,
    colors,
    colorFunc,
    ratio = 0.67,
}) {
    if (!colors && !colorFunc) {
        colorFunc = d3.scaleOrdinal(d3.schemeTableau10);
    }

    if (colors && !colorFunc) {
        colorFunc = i => {
            return colors[i];
        };
    }

    const arc = d3
        .arc()
        .innerRadius(radius * ratio)
        .outerRadius(radius);

    const pie = d3
        .pie()
        .padAngle((3 * 1) / radius)
        .sort(null);

    return (
        <svg className={`${className}`} width={width} height={height}>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
                {pie(data).map((d, i) => (
                    <path key={i} fill={colorFunc(i)} d={arc(d)} />
                ))}
            </g>

            {children}
        </svg>
    );
}
