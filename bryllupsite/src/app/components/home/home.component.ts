import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveDesignService } from 'src/app/services/responsivedesign.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  dateText: string = "10. August,"
  yearText: string = "2024"
  locationText: string = "Rødvig Kro,"
  regionText: string = "Stenvs"
  ceremonyText: string = "Vielse i parken foran Rødvig Kro"
  timeText: string = "Klokken 14:30"

  isMobile: boolean = false;
  isMobileSubscription$: Subscription = new Subscription;

  constructor(private responsiveDesignService: ResponsiveDesignService) { }
  ngOnInit(): void {
    this.isMobile = this.responsiveDesignService.GetCurrentIsMobile();
    this.isMobileSubscription$ = this.responsiveDesignService.GetIsMobileObservable()
      .subscribe(x => this.isMobile = x);
  }

}
