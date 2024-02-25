import { Time } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-praticalinformation',
  templateUrl: './praticalinformation.component.html',
  styleUrls: ['./praticalinformation.component.scss']
})
export class PraticalInformationComponent {
  toastmasterTitle: string = 'Toastmaster'
  toastmasterName: string = 'Katinka Friis'
  toastmasterMailAddress: string = 'KatinkaPostbox@gmail.dk'
  ceremonyTime: Time = { hours: 14, minutes: 0 }
}
