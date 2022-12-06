import { Component, OnInit } from '@angular/core';
import * as WebFont from 'webfontloader';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Wessman & Lillelund';

  faBars = faBars;

  ngOnInit(): void {
    WebFont.load({
      google: {
        families: ['Playfair Display']
      }
    })
  }
}
