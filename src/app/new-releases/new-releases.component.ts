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
import { SpotifyTokenService } from '../spotify-token.service';


@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  //retrieved: any = {};
  retrieved: any =  {}
  releases = Array<any>;
  //releases: any[] = retrieved.albums.items ;        //declaration 

  private liveMusicSubscription:any

  constructor(private info: MusicDataService) { }

  ngOnInit(): void {
    this.liveMusicSubscription= this.info.getNewReleases().subscribe(info => this.retrieved = info     );
  }
   //we have to create ngOnDestroy
   ngOnDestroy(){
    this.liveMusicSubscription.unsubscribe()
  }

}
