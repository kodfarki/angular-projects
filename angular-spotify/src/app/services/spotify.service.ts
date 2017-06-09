import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

// you need OAuth token to consume search service
// See https://developer.spotify.com/web-api/console/get-search-item/

@Injectable()
export class SpotifyService {

    private searchUrl: string;
    private headers = new Headers({"Authorization": "Bearer BQBWJ6PTfBsikB3r6_P9ZreK2wdkQQoFriWN6WAKt_mu73xv4776He29fsRJDLRA-EY_gueUH_UnnU-zY80NoVGp15bhQUHmctIGjCsUBFe35xw1tfFGgGmjyU1fyMywjx539a608-YWxwjySXJR89WtMcWxpGj3I-77wh0-_ye4hncKeVKHne3Q-GwigIiqigkA8G8A5YuFiSRqCjP7ELS4jX43hA_W7_SmHLH_iGPhxVCj864bOxWG9a84MZSu9VA2oTGArQgbafM5gWHSG_EuH2oIyxwfkzB2GuRPjwD7uNu4E7gTd46S_kFvpP3W"});

    constructor(private _http: Http) {

    }
    
    searchMusic(str: string, type = 'artist') {

        this.searchUrl = "https://api.spotify.com/v1/search?q=" + str + "&offset=0&limit=20&type=" + type + "&market=US";

        return this._http.get(this.searchUrl, {headers: this.headers})
            .map(res => res.json());
    }

}
