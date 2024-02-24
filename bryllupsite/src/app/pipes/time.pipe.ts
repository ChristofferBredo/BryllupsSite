import { Time } from '@angular/common'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform (input: Time): string {
    const hours: string = this.Format(input.hours)
    const minutes: string = this.Format(input.minutes)
    return `${hours}:${minutes}`
  }

  private Format(value: number): string {
    return value < 10 && value >= 0
      ? '0' + value.toString()
      : value.toString()
  }
}
