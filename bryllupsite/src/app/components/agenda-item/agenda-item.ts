import { Time } from "@angular/common";

/* Defines Agenda Item entity. 
To be used in AgendaComponent*/
export interface AgendaItem {
    time: Time
    description: string
}