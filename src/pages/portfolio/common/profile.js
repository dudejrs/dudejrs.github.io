import React from 'react';
import Info from '../../resume/section/info';
import Certification from '../../resume/section/certification';
import {GithubLogo, TistoryLogo} from '../../../components/logo';
import ProfileStyles from './profile.module.css';

export default function Profile({
    certificationFilterList = [],
                                    styles
}) {
    const chanelItemStyles = `${ProfileStyles.chanel_item} ${styles.chanel_item || ''}`;
    const chanelImagStyles = `${ProfileStyles.chanel_item} ${styles.chanel_img || ''}`;

    return (
        <>
            <Info />
            <div className={`${ProfileStyles.info} ${styles.info || ''}`}>
                <div>
                    <h4> 자격증 </h4>
                    <Certification filterList = {certificationFilterList} />
                </div>
                <div
                    className={`${ProfileStyles.chanel} ${styles.chanel || ''}`}
                >
                    <h4> Chanel </h4>
                    <ul
                        className={`${ProfileStyles.chanel_list} ${styles.chanel_list || ''}`}
                    >
                        <li>
                            <a
                                className={chanelItemStyles}
                                href="https://dudejrs.github.io/"
                            >
                                <GithubLogo
                                    width={'1.5rem'}
                                    height={'1.5rem'}
                                    className={chanelImagStyles}
                                />
                                <span>https://dudejrs.github.io/</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={chanelItemStyles}
                                href="https://github.com/dudejrs"
                            >
                                <GithubLogo
                                    width={'1.5rem'}
                                    height={'1.5rem'}
                                    className={chanelImagStyles}
                                />
                                <span>https://github.com/dudejrs</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={chanelItemStyles}
                                href="https://dudejrs.tistory.com/"
                            >
                                <TistoryLogo
                                    className={chanelImagStyles}
                                    width={'1.5rem'}
                                    height={'1.5rem'}
                                />
                                <span>https://dudejrs.tistory.com/</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
