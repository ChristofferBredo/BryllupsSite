import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-responsibleperson',
  templateUrl: './responsibleperson.component.html',
  styleUrls: ['./responsibleperson.component.scss']
})
export class ResponsiblepersonComponent {
  @Input({ required: true }) name!: string
  @Input({ required: true }) title!: string
  @Input({ required: true }) email!: string
  @Input() phone: string | undefined
}
