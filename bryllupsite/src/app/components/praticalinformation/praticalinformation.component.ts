import { Time } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-praticalinformation',
  templateUrl: './praticalinformation.component.html',
  styleUrls: ['./praticalinformation.component.scss']
})
export class PraticalInformationComponent {
  toastMasterMailAddress: string = 'katinkapostbox@gmail.dk'
  ceremonyTime: Time = { hours: 14, minutes: 0 }
}
