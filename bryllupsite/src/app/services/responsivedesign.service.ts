import { Injectable, OnInit } from '@angular/core';
import { Observable, auditTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveDesignService implements OnInit {
  constructor() { }

  isMobileObservable$: Observable<boolean> = this.CreateObservable();

  ngOnInit() {

  }

  GetIsMobileObservable() {
    return this.isMobileObservable$;
  }

  GetCurrentIsMobile() {
    return this.IsMobile(window.innerWidth);
  }

  private CreateObservable(): Observable<boolean> {
    return fromEvent(window, 'resize').pipe(
      auditTime(100),
      map(() => this.IsMobile(window.innerWidth), distinctUntilChanged)
    )
  }

  private IsMobile(width: number) {
    return width < 650;
  }
}