import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { BookingInformationComponent } from './booking-information.component'
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card'
import { MatDivider } from '@angular/material/divider'
import { MatGridList, MatGridTile } from '@angular/material/grid-list'
import { MatList, MatListItem } from '@angular/material/list'

describe('BookingInformationComponent', () => {
  let component: BookingInformationComponent
  let fixture: ComponentFixture<BookingInformationComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingInformationComponent, MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatCardSubtitle, MatDivider, MatGridList, MatGridTile, MatList, MatListItem]
    })
    fixture = TestBed.createComponent(BookingInformationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
