import React from 'react';
import {useState} from 'react';

import {Context} from './context/currentPageContext';

function supplement(data, pageSize) {
    while (data.length < pageSize) {
        data.push({});
    }
    return data;
}

export default function Pagination({
    children,
    data,
    offset = 0,
    pageSize,
    style,
}) {
    const [p, setP] = useState(offset);

    return (
        <div style={style}>
            <Context.Provider
                value={{
                    p,
                    setP,
                    hasPrev: p > 0,
                    hasNext: p < data.length / pageSize - 1,
                    items: supplement(
                        data.slice(p * pageSize, (p + 1) * pageSize),
                        pageSize,
                    ),
                }}
            >
                {children}
            </Context.Provider>
        </div>
    );
}
