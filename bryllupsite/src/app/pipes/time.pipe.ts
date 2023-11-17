import { Time } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(input: Time): string {
    var hours: string = this.Format(input.hours);
    var minutes: string = this.Format(input.minutes);
    return `${hours}:${minutes}`;
  }

  private Format(value: number) {
    return value < 10 && value >= 0
      ? "0" + value.toString()
      : value.toString();
  }

}
