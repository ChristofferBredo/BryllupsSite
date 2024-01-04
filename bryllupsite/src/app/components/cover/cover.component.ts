import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveDesignService } from 'src/app/services/responsivedesign.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  coverText = 'Christoffer og Laura'
  coverSubText = '10. August 2024'
  isMobile: boolean = false;
  isMobileSubscription$: Subscription = new Subscription;

  constructor(private responsiveDesignService: ResponsiveDesignService) { }
  ngOnInit(): void {
    this.isMobile = this.responsiveDesignService.GetCurrentIsMobile();
    this.isMobileSubscription$ = this.responsiveDesignService.GetIsMobileObservable()
      .subscribe(x => {
        this.isMobile = x;
      });
  }

}
