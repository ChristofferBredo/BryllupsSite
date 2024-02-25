import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveDesignService } from 'src/app/services/responsivedesign.service';

@Component({
  selector: 'app-oenskeskyen',
  templateUrl: './oenskeskyen.component.html',
  styleUrls: ['./oenskeskyen.component.scss']
})
export class OenskeskyenComponent implements OnInit {
  isMobile: boolean = false
  isMobileSubscription$: Subscription = new Subscription()

  oenskeskyenLink: string = 'https://onskeskyen.dk/s/1UkCW'

  constructor (private readonly responsiveDesignService: ResponsiveDesignService) {}
  ngOnInit (): void {
    this.isMobile = this.responsiveDesignService.GetCurrentIsMobile()
    this.isMobileSubscription$ = this.responsiveDesignService.GetIsMobileObservable()
      .subscribe(x => {
        this.isMobile = x
      })
  }
}
