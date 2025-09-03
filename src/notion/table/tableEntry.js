import {useEffect} from 'react';

import Checkbox from '../../components';
import {Tag} from '../../components';

import ValueEntry from '../valueEntry';
import TitleComponent from './titleComponent';

import tableStyles from './table.module.css';

export default function TableEntry({
    data,
    columns,
    types,
    widths,
    titleOnClick,
    wrap = false,
    lineStyle,
}) {
    return (
        <div
            className={`${tableStyles.row} ${wrap ? tableStyles.rowWrap : ''}`}
            style={{borderBottom: lineStyle}}
        >
            <label className={tableStyles.label}></label>

            {columns.map((column, i) => {
                if (types[i] == 'title')
                    return (
                        <TitleComponent
                            className={`${wrap ? tableStyles.wrap : ''}`}
                            key={i}
                            title={data[column]}
                            width={widths[i]}
                            onClick={
                                titleOnClick
                                    ? () => {
                                          titleOnClick(data);
                                      }
                                    : null
                            }
                            lineStyle={lineStyle}
                        />
                    );

                return (
                    <ValueEntry
                        key={i}
                        className={`${tableStyles.column} ${wrap ? tableStyles.wrap : ''}`}
                        data={data[column]}
                        style={{width: widths[i]}}
                        type={types[i]}
                        wrap={wrap}
                        lineStyle={lineStyle}
                    />
                );
            })}

            <label className={tableStyles.label}></label>
        </div>
    );
}
