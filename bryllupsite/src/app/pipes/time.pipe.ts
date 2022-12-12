import { Time } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Time): string {
    var hours = value.hours == 0 ? "00" : value.hours.toString();
    var minutes = value.minutes == 0 ? "00" : value.minutes.toString();
    return `${hours}:${minutes}`;
  }

}
