/**********************************************************************************************
 ** WEB422 – Assignment 5
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students. * 
 * 
 * Name: Edgar David Garcia Torres  Student ID: 104433206  Date: 22/07/2022
 * 
 * *******************************************************************************************/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//---------------
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
//--------------- Assignment 5 
//import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FavouritesComponentComponent } from './favourites-component/favourites-component.component';
import { SearchResultComponentComponent } from './search-result-component/search-result-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponent } from './login/login.component';
//---------------Assignment 6 
import { InterceptTokenService } from './intercept-token.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutComponent,
    NewReleasesComponent,
    AlbumComponent,
    ArtistDiscographyComponent,
    FavouritesComponentComponent,
    SearchResultComponentComponent,
    RegisterComponentComponent,
    LoginComponent,
  ],
  imports: [
    //----Assignment 5 
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    //-----------
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //-----------
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule
    //-------------
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
