import Plan from './plan';
import Project from './project';

export default function ({type, ...props}) {
    if (type === '계획') {
        return <Plan {...props} />;
    }

    if (type === '프로젝트') {
        return <Project {...props} />;
    }

    return <div> 유효하지 않은 데이터입니다. </div>;
}
