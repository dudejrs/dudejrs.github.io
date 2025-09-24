import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Printable, Page} from '../../components/ui/printable';
import P2024 from './2024';
import P2025 from './2025';

function Default() {
    return (
        <Printable layout="landscape">
            <Page>Portfolio</Page>
            <Page>Hello World!</Page>
        </Printable>
    );
}

export default function Portfolio() {
    return (
        <Routes basename={`${process.env.PUBLIC_URL}/portfolio`}>
            <Route path="2024/*" element={<P2024 />} />
            <Route path="2025/" element={<P2025 />} />
            <Route index path="*" element={<Default />} />
        </Routes>
    );
}
