import React from 'react';
import {useState} from 'react';
import {AbbreviateItem} from '../item';
import {AbbreviateItemHolder} from '../itemHolder';
import Items from '../Items';

export default function  AbbreviateItemStack({d: data, i}) {
    const [actived, setActived] = useState(0);

    return (
        <div key={i} style={{width: '100%'}}>
            {Object.entries(data).map((d, i) => (
                <AbbreviateItemHolder
                    key={i}
                    i={i}
                    d={d}
                    active={i === actived}
                    setActived={setActived}
                    Items={Items}
                    Item={AbbreviateItem}
                />
            ))}
        </div>
    );
}
