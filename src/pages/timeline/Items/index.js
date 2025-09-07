import React from 'react';
import Items from './items';
import PaginationItems from './pagination';

export default function ItemsContainer({data, Item, type}) {
    if (type === '계획') {
        return <PaginationItems data={data} Item={Item} type={type} />;
    }

    return (
        <Items
            style={{height: '100%', overflowY: 'scroll'}}
            data={data}
            Item={Item}
            type={type}
        />
    );
}
