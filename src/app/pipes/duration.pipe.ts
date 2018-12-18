import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const duration: string[] = (value / 60).toString().split('.');
    const hour: string = +duration[0] > 0 ? `${duration[0]}h ` : '';
    let minutes: string = Math.round(+(`0.${duration[1]}`)* 60).toString();
    minutes = +minutes > 0 ? `${minutes}min` : '';
    return hour + minutes;
  }
}
