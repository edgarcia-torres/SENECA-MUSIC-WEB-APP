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


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { SearchResultComponentComponent } from './search-result-component/search-result-component.component';
import { FavouritesComponentComponent } from './favourites-component/favourites-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponent } from './login/login.component';
import { GuardAuthService } from './guard-auth.service';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponentComponent},
  {path: 'newReleases', component: NewReleasesComponent, canActivate: [GuardAuthService] },
  {path: 'album/:id', component: AlbumComponent, canActivate: [GuardAuthService] },
  {path: 'Artist/:id', component: ArtistDiscographyComponent, canActivate: [GuardAuthService] },
  {path: 'About', component: AboutComponent, canActivate: [GuardAuthService] },
  {path: '',redirectTo:'/newReleases', pathMatch: 'full' },
  {path: 'favourites', component: FavouritesComponentComponent, canActivate: [GuardAuthService] },//
  {path: 'search', component: SearchResultComponentComponent, canActivate: [GuardAuthService] },//
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
