import { Injectable } from '@angular/core'
import { type Observable, auditTime, distinctUntilChanged, fromEvent, map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ResponsiveDesignService {
  isMobileObservable$: Observable<boolean> = this.CreateObservable()

  GetIsMobileObservable (): Observable<boolean> {
    return this.isMobileObservable$
  }

  GetCurrentIsMobile (): boolean {
    return this.IsMobile(window.innerWidth)
  }

  private CreateObservable(): Observable<boolean> {
    return fromEvent(window, 'resize').pipe(
      auditTime(100),
      map(() => this.IsMobile(window.innerWidth), distinctUntilChanged)
    )
  }

  private IsMobile (width: number): boolean {
    return width < 650
  }
}
