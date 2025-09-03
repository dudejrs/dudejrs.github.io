import {Tooltip} from '../../components';

import styles from './section.module.css';

export default function ({className, children, title, description}) {
    return (
        <div className={`${styles.container} ${className}`}>
            <div className={`${styles.header}`}>
                <h4 className={`${styles.title}`}> {title} </h4>
                {description && (
                    <Tooltip
                        widthpx={'500px'}
                        heigthpx={'500px'}
                        position={'top'}
                    >
                        <div className={`${styles.description}`}>
                            {description}
                        </div>
                    </Tooltip>
                )}
            </div>
            {children}
        </div>
    );
}
