import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ResponsiveDesignService } from 'src/app/services/responsivedesign.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  githubUrl: string = 'https://github.com/ChristofferBredo/BryllupsSite'
  mailAddress: string = 'christofferbredo@gmail.com'

  isMobile: boolean = false
  isMobileSubscription$: Subscription = new Subscription()

  footercols: number = 3

  constructor (private readonly responsiveDesignService: ResponsiveDesignService) { }
  ngOnInit (): void {
    this.isMobile = this.responsiveDesignService.GetCurrentIsMobile()
    this.SetFooterColsCount()
    this.isMobileSubscription$ = this.responsiveDesignService.GetIsMobileObservable()
      .subscribe(x => {
        this.isMobile = x
        this.SetFooterColsCount()
      })
  }

  SetFooterColsCount (): void {
    this.footercols = this.isMobile ? 1 : 3
  }
}
