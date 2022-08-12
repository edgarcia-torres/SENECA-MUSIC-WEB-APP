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
    console.log("remove from favorites ID: "+deleteId)
    this.deleteFavoriteSubscription = this.data.removeFromFavourites(deleteId).subscribe(data =>{
      console.log("received from remove favorites at FAVORITES COMPONENT: "+ data);
    })
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
