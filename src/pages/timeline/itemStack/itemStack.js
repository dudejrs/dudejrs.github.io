import React from 'react';
import {useState} from 'react';
import {Item} from '../item';
import {ItemHolder} from '../itemHolder';
import Items from '../Items';

export default function ItemStack({d: data, i}) {
    const [actived, setActived] = useState(0);

    return (
        <div key={i} style={{width: '100%'}}>
            {Object.entries(data).map((d, i) => (
                <ItemHolder
                    key={i}
                    i={i}
                    d={d}
                    active={i === actived}
                    setActived={setActived}
                    Items={Items}
                    Item={Item}
                />
            ))}
        </div>
    );
}
