import SomeCountAndRepetition from './counts/someCountAndRepititon';
import SomeCount from './counts/someCount';

import styles from './index.module.css';

export default function AggregationByCategories({
    className,
    data,
    programmingLanguages,
}) {
    return (
        <div className={`${styles.totalContainer} `}>
            {data &&
                data.map((category, i) => (
                    <SomeCountAndRepetition
                        className={styles.countContainer}
                        key={i}
                        data={category}
                    >
                        {programmingLanguages.map((lang, i) => (
                            <SomeCount
                                className={styles.subCountContainer}
                                name={lang}
                                key={i}
                                count={category[lang]}
                            />
                        ))}
                    </SomeCountAndRepetition>
                ))}
        </div>
    );
}
