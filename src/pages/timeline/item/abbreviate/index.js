import {useContext} from 'react';

import {Context} from '../../../../components/ui/timeline/ratioSensible/context';
import {Tag} from '../../../../components/ui';
import VerticalItem from './vertical';
import HorizontalItem from './horizontal';
import {month} from './util';

import styles from './index.module.css';

export default function ({type, d, i}) {
    if (Object.keys(d).length == 0) {
        return <div className={`${styles.container}`}> </div>;
    }
    const isVertical = useContext(Context);

    if (isVertical) {
        return <VerticalItem type={type} d={d} i={i} />;
    }

    return <HorizontalItem type={type} d={d} i={i} />;
}
