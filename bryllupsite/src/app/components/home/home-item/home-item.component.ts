import { Component, Input } from '@angular/core';
import { HomeItem } from 'src/app/interfaces/homeitem';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss']
})
export class HomeItemComponent {
  @Input() homeItem!: HomeItem;
}
