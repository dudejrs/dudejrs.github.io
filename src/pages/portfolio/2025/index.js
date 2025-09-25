import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Kakao from './kakao';

export default function Index() {
    return (
        <Routes>
            <Route path="kakao" element={<Kakao />} />
            <Route path="*" index element={<>HelloWorld</>} />
        </Routes>
    );
}
