import React, {useCallback, useState} from 'react';

import TableHeaderComponent from './tableHeaderComponent';

import tableStyles from './table.module.css';

export default function TableHeader({
    columns,
    types,
    widths,
    setWidthByIndex,
    lineStyle,
}) {
    const [_dragged, setDragged] = useState(false);

    const onDrag = useCallback((e, index) => {
        let start = e.target.parentElement.getBoundingClientRect().x;

        setDragged(true);
        setWidthByIndex(index, e.clientX - start);
    });

    const onDragLeave = useCallback(() => {
        console.log('a');
    });

    return (
        <div className={tableStyles.row} style={{borderBottom: `${lineStyle}`}}>
            <label className={tableStyles.label}></label>

            {Array(columns.length)
                .fill(1)
                .map((_, i) => {
                    return (
                        <TableHeaderComponent
                            name={columns[i]}
                            type={types[i]}
                            width={widths[i]}
                            key={i}
                            index={i}
                            onDrag={onDrag}
                            onDragLeave={onDragLeave}
                            lineStyle={lineStyle}
                        />
                    );
                })}

            <label className={tableStyles.label}></label>
        </div>
    );
}
