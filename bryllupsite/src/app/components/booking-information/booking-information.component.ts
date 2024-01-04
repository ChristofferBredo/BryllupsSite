import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveDesignService } from 'src/app/services/responsivedesign.service';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.component.html',
  styleUrls: ['./booking-information.component.scss']
})
export class BookingInformationComponent implements OnInit {
  cols: number = 3;
  

  isMobile: boolean = false;
  isMobileSubscription$: Subscription = new Subscription;

  constructor(private responsiveDesignService: ResponsiveDesignService) { }
  ngOnInit(): void {
    this.isMobile = this.responsiveDesignService.GetCurrentIsMobile();
    this.cols = this.calculateCols(this.isMobile);
    this.isMobileSubscription$ = this.responsiveDesignService.GetIsMobileObservable()
      .subscribe(x => {
        this.isMobile = x;
        this.cols = this.calculateCols(this.isMobile);
      });
  }

  calculateCols(isMobile: boolean) {
    return isMobile ? 1 : 3;
  }

}
