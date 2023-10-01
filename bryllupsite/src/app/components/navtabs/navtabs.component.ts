import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/link';
import { RouterlinksService } from 'src/app/services/routerlinks.service';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.scss']
})

export class NavtabsComponent implements OnInit {
  navLinks : Link[] = []
  
  constructor(private routerlinksService : RouterlinksService) {}
  
  ngOnInit(): void {
    this.navLinks = this.routerlinksService.GetRouterLinks();
  }
}
