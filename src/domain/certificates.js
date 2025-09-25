import axios from 'axios';
import {certificatePath} from './index';

export default function getCertificates() {
    return axios.get(certificatePath).then(({data}) => data);
}
