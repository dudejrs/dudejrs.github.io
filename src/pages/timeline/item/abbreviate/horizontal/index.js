import React from 'react';
import Plan from './plan';
import Project from './project';
import Practice from "./practice";

export default function HorizontalItem({type, ...props}) {
    if (type === '계획') {
        return <Plan {...props} />;
    }

    if (type === '프로젝트') {
        return <Project {...props} />;
    }

    if (type === '실습') {
        return <Practice {...props} />;
    }

    return <div> 유효하지 않은 데이터입니다. </div>;
}
