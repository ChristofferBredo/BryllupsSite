import { Component, OnInit } from '@angular/core'
import { RouterlinksService } from 'src/app/services/routerlinks.service'
import { Link } from 'src/app/interfaces/link'
import { ResponsiveDesignService } from 'src/app/services/responsivedesign.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isMobile = false
  isMobileSubscription$: Subscription = new Subscription()
  navLinks: Link[] = []

  constructor (private readonly routerlinksService: RouterlinksService,
    private readonly responsiveDesignService: ResponsiveDesignService) { }

  ngOnInit (): void {
    this.isMobile = this.responsiveDesignService.GetCurrentIsMobile()
    this.isMobileSubscription$ = this.responsiveDesignService.GetIsMobileObservable()
      .subscribe(x => (this.isMobile = x))

    this.navLinks = this.routerlinksService.GetRouterLinks()
  }
}
