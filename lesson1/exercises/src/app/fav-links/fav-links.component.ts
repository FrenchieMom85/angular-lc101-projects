import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  faveLinks = ["https://www.launchcode.org/", "https://www.amazon.com/", "https://www.hulu.com/"]
  constructor() { }

  ngOnInit() {
  }

}
