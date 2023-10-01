import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  title = 'C & L';
  isMobile = false;

  constructor(private breakpointObserver : BreakpointObserver) {  }
  
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

