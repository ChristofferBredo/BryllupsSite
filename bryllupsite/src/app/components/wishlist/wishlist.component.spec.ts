import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WishlistComponent } from './wishlist.component'
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card'
import { MatDivider } from '@angular/material/divider'
import { MockComponent } from 'ng-mocks'
import { ResponsiblepersonComponent } from '../responsibleperson/responsibleperson.component'
import { OenskeskyenComponent } from './oenskeskyen/oenskeskyen.component'

describe('WishlistComponent', () => {
  let component: WishlistComponent
  let fixture: ComponentFixture<WishlistComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistComponent, MatCard, MatCardHeader, MatCardContent, MatDivider, MockComponent(ResponsiblepersonComponent), MockComponent(OenskeskyenComponent)]
    })
    fixture = TestBed.createComponent(WishlistComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
