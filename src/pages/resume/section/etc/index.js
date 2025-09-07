import React from 'react';
import Section from '../index';
import Contact from './component/contact';

export default function Etc({header}) {
    const items = [
        {
            img: 'img/contact/github-mark.svg',
            text: 'https://github.com/dudejrs',
        },
        {img: 'img/contact/tistory.svg', text: 'https://dudejrs.tistory.com'},
        {
            img: 'img/contact/portfolio.svg',
            text: 'https://github.com/dudejrs/info',
        },
    ];

    return (
        <Section header={header}>
            <Contact items={items} />
        </Section>
    );
}
