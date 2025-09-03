import styles from './index.module.css';

const ipsemLorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non egestas elit. Phasellus sit amet mauris et leo condimentum sagittis et id velit. Phasellus pulvinar eros id lorem faucibus, eget ultrices dui vehicula. Ut dapibus ligula id dui dignissim euismod. Vivamus volutpat felis bibendum, sodales lorem nec, euismod enim. Morbi consequat tellus at viverra pretium. Integer sodales neque euismod metus varius pretium. Sed justo massa, molestie a purus id, suscipit lacinia felis. Nulla sed tellus turpis. In auctor, odio quis finibus finibus, eros magna bibendum nibh, sed finibus ante turpis in neque. Nulla eleifend molestie enim, quis ultrices urna feugiat in. In tempus, tellus sed mattis commodo, elit augue eleifend odio, fermentum ornare ipsum purus ut nunc. Ut convallis quis libero nec tempor. Suspendisse sollicitudin semper facilisis. Praesent egestas nibh ut velit imperdiet, vitae posuere velit placerat. Praesent consequat neque quis justo placerat, ut aliquam augue vehicula. Proin tempor sapien eget ullamcorper lobortis. Sed augue lacus, gravida id luctus vel, elementum non purus. Etiam vitae mattis turpis. Fusce bibendum volutpat eros. Duis ultrices leo ut vehicula consectetur. Ut vel neque eu ante condimentum consequat quis non lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget feugiat eros. Donec feugiat vel ante dictum dignissim. Nam eu sem imperdiet, sollicitudin justo eget, pharetra metus. Donec metus dui, gravida tincidunt efficitur sit amet, aliquam quis erat. Donec facilisis bibendum purus non convallis.';

export default function BlogContainer({className, contents, date, title}) {
    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.title}>{title || 'title'}</div>
            <p className={styles.content}>{contents || ipsemLorem}</p>
            <div className={styles.date}>{date || '2099-12-31'}</div>
        </div>
    );
}
