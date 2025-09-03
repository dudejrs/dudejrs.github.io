import {useState} from 'react';
import {Item, AbbreviateItem} from '../item';
import {ItemHolder} from '../itemHolder';
import Accordian from '../../../components/ui/accordian';
import Items from '../Items';

export default function ({d: data, i, mapper}) {
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
