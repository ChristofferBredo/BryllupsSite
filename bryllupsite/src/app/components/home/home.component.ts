import { Component, OnInit } from '@angular/core';
import { HomeItem } from 'src/app/interfaces/homeitem';
import { HomeitemService } from 'src/app/services/homeitem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  homeItems: HomeItem[] = []

  constructor(private homeItemService : HomeitemService) {}
  ngOnInit(): void {
    this.homeItems = this.homeItemService.GetHomeItems()
  }

}
