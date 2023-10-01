import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { RouterlinksService } from 'src/app/services/routerlinks.service';
import { Link } from 'src/app/interfaces/link';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  title = 'C & L';
  isMobile = false;
  navLinks: Link[] = []

  constructor(private breakpointObserver: BreakpointObserver,
    private routerlinksService: RouterlinksService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 767px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      })

    this.navLinks = this.routerlinksService.GetRouterLinks();
  }
}

