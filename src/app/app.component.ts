import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts=[
  {
    title:"Neat tree",
    imageUrl:"assets/tree.jpg",
    username:"nature",
    content:"I saw this neat tree today"

  },
  {
    title:"Snowi Mountain",
    imageUrl:"assets/mountain.jpg",
    username:"mountainlover",
    content:"Here is a picture of a snowi mountain "

  },
  {
    title:"Mountain Biking",
    imageUrl:"assets/mountainBike.jpg",
    username:"biking22",
    content:"I did some biking today"

  }
];
}
