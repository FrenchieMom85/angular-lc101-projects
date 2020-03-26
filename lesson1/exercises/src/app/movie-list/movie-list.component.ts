import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Harry Potter', 'Avengers', 'Star Wars', 'A lot like love'];

   constructor() { }

   ngOnInit() {
   }

}
