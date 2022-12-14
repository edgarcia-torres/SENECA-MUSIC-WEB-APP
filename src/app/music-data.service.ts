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

import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';
import { environment } from './../environments/environment';
import { AuthService } from './auth.service';
import jwt_decode from "jwt-decode";
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  constructor(private spotifyToken: SpotifyTokenService, private http: HttpClient,private user: AuthService) { }  

  getNewReleases(): Observable<SpotifyApi.ListOfNewReleasesResponse> {//ALREADY COMPLETE
      return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
        return this.http.get<SpotifyApi.ListOfNewReleasesResponse>("https://api.spotify.com/v1/browse/new-releases", { headers: { "Authorization": `Bearer ${token}` } });
      }));
  }

   getArtistById(id: any): Observable<SpotifyApi.ListOfNewReleasesResponse> {
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
      return this.http.get<SpotifyApi.ListOfNewReleasesResponse>(`https://api.spotify.com/v1/artists/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
    }));
  }

  getAlbumsByArtistId(id: any): Observable<SpotifyApi.ListOfNewReleasesResponse> {//ADD THE QUERY PARAMETERS include_groups=album,single  limit=50
    let queryParams = {
      include_groups: "album,single",
      limit : 50
    }
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
      return this.http.get<SpotifyApi.ListOfNewReleasesResponse>(`https://api.spotify.com/v1/artists/${id}/albums`, { headers: { "Authorization": `Bearer ${token}` }, params: queryParams });
    }));
  }
  
  getAlbumById(id: any): Observable<SpotifyApi.ListOfNewReleasesResponse> {
    console.log(id)
    return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
      return this.http.get<SpotifyApi.ListOfNewReleasesResponse>(`https://api.spotify.com/v1/albums/${id}`, { headers: { "Authorization": `Bearer ${token}`} });
    }));
  }

  searchArtists(searchString:string):Observable<SpotifyApi.ArtistSearchResponse>{
    let queryParams = {
      q: searchString,
      type: "artist",
      limit: "50"
     }
     return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
      console.log("INSIDE THE SERVICE QUERY PARAM IS: " + searchString);
       return this.http.get<SpotifyApi.ArtistSearchResponse>("https://api.spotify.com/v1/search", { headers: { "Authorization": `Bearer ${token}` }, params: queryParams });
     }));  
   }

   addToFavourites(id:string): Observable<[String]> {
    let thisUser =this.user.getToken();
    let thisUser2 = jwt_decode(String(thisUser));
    console.log("String user : ", thisUser2)
    let queryParams = { user: thisUser2, id: id, }
        return this.http.put<any>(environment.userAPIBase+`api/user/favourites/${id}`,{params: queryParams});
  }
  
  removeFromFavourites(id:string): Observable<any> {
    return this.http.delete<[String]>(environment.userAPIBase+`api/user/favourites/${id}`).pipe(mergeMap(favouritesArray => {
    return this.getFavourites();
    }));
  }
  
  getFavourites(): Observable<any> {
    return this.http.get<[String]>(`${environment.userAPIBase}api/user/favourites/`).pipe(mergeMap(favouritesArray => {
      let queryParams = {  ids: favouritesArray.join(),  }  
      if(favouritesArray.length > 0){
        return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
          return this.http.get<SpotifyApi.ListOfNewReleasesResponse>(`https://api.spotify.com/v1/tracks`, { headers: { "Authorization": `Bearer ${token}` }, params: queryParams});
        }));
      }else{
        return new Observable(o=>{o.next([])});
      }
    }));
  }
  
}