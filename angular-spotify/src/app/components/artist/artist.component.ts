import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Album} from "../../Album";
import {Artist} from "../../Artist";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css'],
    providers: [SpotifyService],
})

export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist;
    albums: Album[];

    constructor(
        private _service: SpotifyService,
        private _route:ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params
            .map(params => params["id"])
            .subscribe((id) => {
                this._service.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })
            })
    }

}