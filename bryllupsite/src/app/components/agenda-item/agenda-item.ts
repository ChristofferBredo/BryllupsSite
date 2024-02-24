import { Time } from '@angular/common'

/* Defines Agenda Item entity.
To be used in AgendaComponent */
export class AgendaItem {
  constructor (public time: Time, public description: string) {
    this.time = time
    this.description = description
  }
}
