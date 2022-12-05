import { Component, OnInit } from '@angular/core';
import * as WebFont from 'webfontloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Wessman & Lillelund';

  ngOnInit(): void {
    WebFont.load({
      google: {
        families: ['Playfair Display']
      }
    })
  }
}
