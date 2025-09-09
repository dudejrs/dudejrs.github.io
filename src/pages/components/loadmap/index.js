import React from 'react';
import {useState, useEffect, useCallback} from 'react';

import {getCounts} from '../../../domain/plans';

import TrackList from './tracklist';
import TrackNav from './trackNav';
import TrackDetailView from './trackDetailView';

import styles from './loadmap.module.css';

export default function Loadmap({
    className,
    trackListMap,
    trackLists,
    updateDate,
}) {
    const [trackList, setTrackList] = useState('Javascript');
    const [track, setTrack] = useState('');
    const [counts, setCounts] = useState(new Map());
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        let categories = Object.values(trackListMap).flatMap(a => a);
        getCounts(categories).then(setCounts);
    }, []);

    const openDetailView = useCallback(
        title => {
            setTrack(title);
            setIsOpened(true);
        },
        [track, isOpened],
    );

    return (
        <div className={`${styles.container} ${className}`}>
            <TrackNav
                title={trackList}
                onClick={setTrackList}
                trackLists={trackLists}
            />
            <div className={styles.content}>
                <TrackList
                    counts={counts}
                    title={trackList}
                    tracks={trackListMap[trackList]}
                    onClick={openDetailView}
                />
                {isOpened ? (
                    <TrackDetailView name={track} onClick={setIsOpened} />
                ) : (
                    <></>
                )}
            </div>
            {updateDate && (
                <div className={styles.footer}>update : {updateDate}</div>
            )}
        </div>
    );
}
