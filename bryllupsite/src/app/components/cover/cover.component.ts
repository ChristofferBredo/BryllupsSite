import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  coverText = 'Christoffer og Laura'
  coverSubText = '10. August 2024'
  isMobile = false;
  constructor(private breakpointObserver : BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 767px)'])
      .subscribe((state: BreakpointState) => {
        if(state.matches){
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      })
  }
  
}
