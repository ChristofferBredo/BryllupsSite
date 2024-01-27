import { Component, type OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ResponsiveDesignService } from 'src/app/services/responsivedesign.service'

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.component.html',
  styleUrls: ['./booking-information.component.scss']
})
export class BookingInformationComponent implements OnInit {
  contactMailAddress: string = 'christofferbredo@gmail.com'
  cols: number = 3
  isMobile: boolean = false
  isMobileSubscription$: Subscription = new Subscription()

  constructor (private readonly responsiveDesignService: ResponsiveDesignService) { }
  ngOnInit (): void {
    this.isMobile = this.responsiveDesignService.GetCurrentIsMobile()
    this.cols = this.calculateCols(this.isMobile)
    this.isMobileSubscription$ = this.responsiveDesignService.GetIsMobileObservable()
      .subscribe(x => {
        this.isMobile = x
        this.cols = this.calculateCols(this.isMobile)
      })
  }

  calculateCols (isMobile: boolean): 3 | 1 {
    return isMobile ? 1 : 3
  }
}
