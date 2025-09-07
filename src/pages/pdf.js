import React from 'react';
import {Printable, Page} from '../components/ui/printable';

export default function PdfPage() {
    return (
        <Printable layout="landscape">
            <Page>Hello World!</Page>
            <Page>Hello World!</Page>
        </Printable>
    );
}
