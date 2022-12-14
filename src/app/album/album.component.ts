/**********************************************************************************************
 ** WEB422 – Assignment 6
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students. * 
 * 
 * Name: Edgar David Garcia Torres  Student ID: 104433206  Date: 05/08/2022
*
* Angular App (Deployed) Link: https://imaginative-panda-ac45aa.netlify.app
*
* User API (Heroku) Link: https://arcane-fjord-43322.herokuapp.com/ 
* *******************************************************************************************/


import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any = {}
  
  private LiveMusicSubscription:  any
  private favoriteSubscription: any
  
  constructor(private data: MusicDataService,private route: ActivatedRoute, private snack: MatSnackBar,private favorite :MusicDataService,private user: AuthService ) { }


  clickFav = (trackId: any) => {

   this.favorite.addToFavourites(trackId).subscribe({
      next: data => {
        this.favoriteSubscription = data;
        console.log("added Id: "+ trackId + "added")
        this.snack.open("Adding to Favorites...", "Done", { duration: 1500 });
      },
      error: error => {
        this.snack.open(error.statusText,"" , { duration: 1500 });
        console.log("track Id: " + trackId + " not added to favorites list");
      }
    });
  }


  ngOnInit(): void {
    this.LiveMusicSubscription=this.data.getAlbumById(this.route.snapshot.params['id']).subscribe(data => this.album = data)
  }
  
  ngOnDestroy(){
    this.LiveMusicSubscription.unsubscribe()
  }
}
