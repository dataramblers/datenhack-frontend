export interface ImageResult {
    Objekttraeger: string;
    Signatur: string;
    Titel: string;
    Ort: string;
    Schlagwoerter: string[];
    Serientitel: string;
    Start: number;
    Lizenz: string;
    End: number;
}

export interface HitsInner {
    _index: string;
    _type: string;
    _id: string;
    _score: number;
    _source: ImageResult;
}

export interface Hits {
    total: number;
    max_score: number;
    hits: HitsInner[];
}

export interface Shard {
    total: number;
    failed: number;
    successful: number;
    skipped: number;
}

export interface ElasticSearchResponse {
    hits: Hits;
    took: number;
    timed_out: boolean;
    _shards: Shard;
}
