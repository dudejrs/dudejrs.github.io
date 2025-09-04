import React from "react";
import {useRef, useEffect, useState} from 'react';

import {Context} from './context/currentNodeSize';

export default function CurrentNodeSizeSensible({children, className, style}) {
    const ref = useRef();
    const [size, setSize] = useState([0, 0]);

    const onResize = () => {
        const rect = ref.current.getBoundingClientRect();
        setSize([rect.width, rect.height]);
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div ref={ref} className={`${className}`} style={{...style}}>
            <Context.Provider
                value={{
                    size,
                    setSize,
                    partiallyCovered: size[0] > window.innerWidth,
                }}
            >
                {children}
            </Context.Provider>
        </div>
    );
}
