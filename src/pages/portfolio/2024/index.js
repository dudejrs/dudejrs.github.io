import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Printable, Page} from '../../../components/ui/printable';
import NaverBoostCamp from './naverboostcamp';

function Default() {
    return (
        <Printable layout="landscape">
            <Page>2024</Page>
            <Page>Hello World!</Page>
        </Printable>
    );
}

export default function Portfolio() {
    return (
        <Routes basename={`${process.env.PUBLIC_URL}`}>
            <Route path="naverboostcamp" element={<NaverBoostCamp />} />
            <Route index path="*" element={<Default />} />
        </Routes>
    );
}
