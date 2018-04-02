import {ImageResult} from './elastic-search-response';

export declare interface Image {
    title: string;
    ort: string;
    signatur: string;
    schlagwoerter?: string[];
}

export class Image implements Image {
    title = '';
    ort = '';
    signatur = '';

    /**
     * Parse a result from a Elastic search result
     * @param {string} esResult
     */
    static imageFabric(esResult: ImageResult) {
        const image = new Image();
        image.title = esResult.Titel || '';
        image.ort = esResult.Ort || '';
        image.signatur = esResult.Signatur || '';
        image.schlagwoerter = esResult.Schlagwoerter || [];
        return image;
    }
}
