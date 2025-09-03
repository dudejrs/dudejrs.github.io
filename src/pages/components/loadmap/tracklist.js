import loadmapStyles from './loadmap.module.css';

import Track from './track';
import styles from './tracklist.module.css';

export default function TrackList({counts, title, tracks, onClick}) {
    return (
        <>
            <ul className={styles.trackline}>
                {tracks.map((track, index) => (
                    <Track
                        count={counts.get(track)}
                        key={index}
                        track={track}
                        onClick={onClick}
                    />
                ))}
            </ul>
        </>
    );
}
