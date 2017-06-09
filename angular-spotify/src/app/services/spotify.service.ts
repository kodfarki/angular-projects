import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

// you need OAuth token to consume search service
// See https://developer.spotify.com/web-api/console/get-search-item/

@Injectable()
export class SpotifyService {

    private searchUrl: string;
    private headers = new Headers({"Authorization": "Bearer BQCZcphCmZTqvGgU_A922PzdE6_4TaUY6VMIRENvbOXh2OStocuReIVfkaiG-w-xfoUeB595lcab_jRiYIM6I1NghsJ_MJa1ZliQoAaIlkm1fBJiXyCCGeut1cbmHsbjgsuehDkyAZJaUMiwyJ2xc0qc3fopyyAt1J1PcyqnfldU2gpSoQkhoCJkz5AwEhFj84cK1Xn9zky64KBrPW2MkHSq8efXNQzMiS125hrXlJ0cX21zh-vL8QTwPhMVqZ77lxOqwI5n3jTZ--C234AIaZg57lZkpxbicrWHjp6f8k5kBNXCYqeIHVhlYLAbnTnU"});

    constructor(private _http: Http) {

    }
    
    searchMusic(str: string, type = 'artist') {

        this.searchUrl = "https://api.spotify.com/v1/search?q=" + str + "&offset=0&limit=20&type=" + type + "&market=US";

        return this._http.get(this.searchUrl, {headers: this.headers})
            .map(res => res.json());
    }

}
