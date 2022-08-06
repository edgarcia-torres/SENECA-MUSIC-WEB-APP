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
  selector: 'app-search-result-component',
  templateUrl: './search-result-component.component.html',
  styleUrls: ['./search-result-component.component.css']
})

export class SearchResultComponentComponent implements OnInit {
  results : any = {}
  list: Array<any> = []
  private searchSubscription:  any
  private artistSubscription: any

  constructor(private data: MusicDataService, private route: ActivatedRoute ) { }

searchQuery: string = this.route.snapshot.params['q'];
ngOnInit(): void {
  this.results = {}
    this.searchSubscription = this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] ||"";
      this.artistSubscription=this.data.searchArtists(this.searchQuery).subscribe(data =>{
        this.results = data
        function hasProperty(value: any) { return value.images[1] != undefined    }
        this.list = this.results.artists.items.filter(hasProperty);
    });
   });
}

  ngOnDestroy() {
    this.artistSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }
}

