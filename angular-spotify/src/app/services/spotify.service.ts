import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

// you need OAuth token to consume search service
// See https://developer.spotify.com/web-api/console/get-search-item/

@Injectable()
export class SpotifyService {

    private searchUrl: string;
    private token = "BQBVCZNGhefZF0Oh5W1RVGMt-fJ67esIgUYFFMvEDisIQj22m7xZ1PF3k2LdZ1xRu-RtO2ftwYGEq0IJo8-RY-Suu7r2ZBdiB-3KmINOqERdO0pHw_DbQsenE5hqWmv5jws1r-mDhNjmGHrLx-DmsJ8CeXbSAKjChwGdxagUJXoGVirOawJYPg5tuxFtQvIpRQggGfo2v0uQNyQYUGKSA1FRypzWwXmwJM_NrXPxmEE5ZnKp0Yle1Xh0WuQfJ5igp1Wic_DmmntjnbhAJlPoRCN1F8pca953er6joCizhRrbFWAlsbgUGq23jwyVFo03";
    
    private headers = new Headers({"Authorization": "Bearer " + this.token});
    private artistUrl: string;

    constructor(private _http: Http) {

    }
    
    searchMusic(str: string, type = 'artist') {
        this.searchUrl = "https://api.spotify.com/v1/search?q=" + str + "&offset=0&limit=20&type=" + type + "&market=US";

        return this._http.get(this.searchUrl, {headers: this.headers})
            .map(res => res.json());
    }

    getArtist(id: string) {
        this.artistUrl = "https://api.spotify.com/v1/artists/" + id;

        return this._http.get(this.artistUrl, {headers: this.headers})
            .map(res => res.json());
    }
}
