import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Printable, Page} from '../../components/ui/printable';
import P from './2024';

function Default() {
    return (
        <Printable layout="landscape">
            <Page>Portfolio</Page>
            <Page>Hello World!</Page>
        </Printable>
    );
}

export default function () {
    return (
        <Routes basename={`${process.env.PUBLIC_URL}/portfolio`}>
            <Route path="2024/*" element={<P />} />
            <Route index path="*" element={<Default />} />
        </Routes>
    );
}
