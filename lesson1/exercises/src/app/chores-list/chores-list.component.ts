import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['Self quarantine', 'Complete LaunchCode prep work', 'Dont hurt family'];

   constructor() { }

   ngOnInit() {
   }

}