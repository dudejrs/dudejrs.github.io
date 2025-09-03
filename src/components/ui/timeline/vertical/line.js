export default function ({
    width = 3,
    height = 700,
    margin = 0,
    stroke = 6,
    color,
    children,
}) {
    return (
        <div style={{marginLeft: margin / 2, marginRight: margin / 2}}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${width} ${height}`}
                width={width}
                height={height}
            >
                <g fill="none" stroke={color} strokeWidth={`${stroke}px`}>
                    <line x1={width / 2} y1={height} x2={width / 2} />
                    {children}
                </g>
            </svg>
        </div>
    );
}
