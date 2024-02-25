import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PraticalInformationComponent } from './praticalinformation.component'
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card'
import { MatDivider } from '@angular/material/divider'
import { TimePipe } from 'src/app/pipes/time.pipe'
import { RouterTestingModule } from '@angular/router/testing'
import { Mock, MockComponent } from 'ng-mocks'
import { ResponsiblepersonComponent } from '../responsibleperson/responsibleperson.component'

describe('PraticalinformationComponent', () => {
  let component: PraticalInformationComponent
  let fixture: ComponentFixture<PraticalInformationComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraticalInformationComponent, MatCard, MatCardHeader, MatCardContent, MatDivider, TimePipe, MockComponent(ResponsiblepersonComponent)],
      imports: [RouterTestingModule]
    })
    fixture = TestBed.createComponent(PraticalInformationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
