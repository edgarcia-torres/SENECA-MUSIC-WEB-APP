# Seneca Music

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

#This project

This web page displays music information retrieved from Spotify using his API services.

This App displays the most updated music information available on Spotify. The first page is a list of recent album releases available. This page offers the possibility to search music by the artist's name. Access the search bar in the unfoldable navigation bar, the app will display a list of artists matching the word entered. Some themes offer short audio that can be listened to. 

This app also allows the user to create a list of favorite songs and display them in the favorites section. Information about user accounts like user names, passwords, and lists of favorite songs are stored in a Mongo database that is accessed through an API created by me. 

The API to manage user information is deployed on Heroku:  https://arcane-fjord-43322.herokuapp.com/

This application is deployed on Netlify:  https://imaginative-panda-ac45aa.netlify.app

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
