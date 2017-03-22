import { Component } from '@angular/core';
import { LogService } from './wiki.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent {
  title: string = "Assignment 15.2"

  constructor( ){
    
      }

 

  //returns an array of string results
  //to be rendered in a table

}
   