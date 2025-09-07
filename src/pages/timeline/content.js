import React from 'react';
import {useContext} from 'react';

import PaginationButtons from '../../components/ui/pagination/buttons';
import {Context as CurrentPageContext} from '../../components/ui/pagination/context/currentPageContext';
import {Context as LayoutContext} from '../../components/ui/sensible/context/layout';

import {RatioSensibleTimeLine} from '../../components/ui';
import {LayoutSensible} from '../../components/ui/sensible';

import styles from './content.module.css';

function LayoutSensibleContent({items, mapper}) {
    const layout = useContext(LayoutContext);

    if (layout === 'portrait') {
        return (
            <div style={{position: 'relative'}}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'sticky',
                        top: 50,
                        zIndex: 2,
                    }}
                >
                    <PaginationButtons />
                </div>
                <div>
                    <RatioSensibleTimeLine
                        data={items}
                        mapper={mapper}
                        ratio={1.5}
                        ratios={[0, 0.5, 0, 2]}
                        bmargin={50}
                        stroke={2}
                        radius={4}
                        color={'#aaa'}
                        minSize={[1000, 500]}
                    />
                </div>
            </div>
        );
    }

    return (
        <div style={{position: 'relative'}}>
            <RatioSensibleTimeLine
                data={items}
                mapper={mapper}
                ratio={1.5}
                ratios={[0, 0.5, 0, 2]}
                bmargin={50}
                stroke={2}
                radius={4}
                color={'#aaa'}
                minSize={[1000, 500]}
            />
            <div style={{position: 'absolute', bottom: 30, right: 100}}>
                <PaginationButtons style={{zIndex: 2}} />
            </div>
        </div>
    );
}

export function Content({mapper}) {
    const {items} = useContext(CurrentPageContext);

    return (
        <LayoutSensible ratio={0.8} className={styles.container}>
            <LayoutSensibleContent items={items} mapper={mapper} />
        </LayoutSensible>
    );
}
