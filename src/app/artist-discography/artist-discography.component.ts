/**********************************************************************************************
 ** WEB422 – Assignment 5
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students. * 
 * 
 * Name: Edgar David Garcia Torres  Student ID: 104433206  Date: 22/07/2022
 * 
 * *******************************************************************************************/

import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {


  albums: any ={}
  artist: any = {}

  private LiveMusicSubscription:  any
  private AlbumSubscription:  any
  constructor(private data: MusicDataService,  private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.LiveMusicSubscription=this.data.getArtistById(this.route.snapshot.params['id']).subscribe(data => this.artist = data);
    this.AlbumSubscription =this.data.getAlbumsByArtistId(this.route.snapshot.params['id']).subscribe(data => {
      this.albums = data
      console.log("ALBUMS IS: ", this.albums)
      this.albums.items=this.albums.items.filter((curValue: any, index: any, self: any) => self.findIndex((t: { name: any; }) => t.name.toUpperCase() === curValue.name.toUpperCase()) === index)
    })
   
  }

    //we have to create ngOnDestroy
    ngOnDestroy(){ // every time we subscribe we have to unsubscrite when we dont want to use it any more 
      this.LiveMusicSubscription.unsubscribe()
      this.AlbumSubscription.unsubscribe()
    }
  

}
