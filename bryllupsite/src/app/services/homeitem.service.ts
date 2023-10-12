import { Injectable } from '@angular/core';
import { HomeItem } from '../interfaces/homeitem';

@Injectable({
  providedIn: 'root'
})
export class HomeitemService {

  constructor() { }

  GetHomeItems() {
    return this.homeItems;
  }


  homeItems: HomeItem[] = [
    {
      title: "Lokation",
      imageSource: "assets/images/omraadet.jpg",
      leftImage: false,
      description: "Her kan du se hvor vi skal holde gildet",
    },
    {
      title: "Tidsplan",
      imageSource: "assets/images/Stickwing_2x.png",
      leftImage: true,
      description: "Her kan du se den gode tidsplan"
    }
  ];

}
