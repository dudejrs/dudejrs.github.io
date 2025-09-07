import React from 'react';

export default function Items({data, Item, type, style}) {
    return (
        <div style={style}>
            {data.map((d, i) => (
                <Item type={type} key={i} d={d} i={i} />
            ))}
        </div>
    );
}
