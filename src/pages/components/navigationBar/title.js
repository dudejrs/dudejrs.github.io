import {Link} from 'react-router-dom';

export default function Title({title}) {
    return (
        <Link to="/">
            <h2>{title}</h2>
        </Link>
    );
}
