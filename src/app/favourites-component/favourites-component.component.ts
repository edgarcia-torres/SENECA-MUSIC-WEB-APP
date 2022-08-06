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

@Component({
  selector: 'app-favourites-component',
  templateUrl: './favourites-component.component.html',
  styleUrls: ['./favourites-component.component.css']
})
export class FavouritesComponentComponent implements OnInit {

  favourites: Array<any> = []
  private favoritesSubscription: any

  private deleteFavoriteSubscription: any

  constructor(private data: MusicDataService) { }

  removeFromFavourites(deleteId: any){
    console.log("remove from favorites")
    this.deleteFavoriteSubscription = this.data.removeFromFavourites(deleteId).subscribe;
    console.log(this.deleteFavoriteSubscription)
    this.operation();
  }
 operation(){
    this.favoritesSubscription = this.data.getFavourites().subscribe(data => {
    this.favourites = data.tracks
    console.log("favorites is: ", this.favourites)})
 }

  ngOnInit(): void {
    this.operation();
  }

  ngOnDestroy(){
    this.favoritesSubscription.unsubscribe()
  }
}
