import {environment} from '../../../environments/environment';

export class EsUrl {
    /**
     * Get the backend url for a service
     * @param {String} path
     * @param {Array<string>} searchParams
     * @returns {string}
     */
    static getEsUrl(path: String, searchParams: Array<string> = []) {
        const base = `${environment.protocol}://${environment.elasticsearch}/${environment.esIndex}/${path}`;
        const searchParamString = searchParams.length > 0 ? '?' + searchParams.join('&') : '';
        return base + searchParamString;
    }
}
