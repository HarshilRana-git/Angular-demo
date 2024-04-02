import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe',
})
export class NewPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let v = value;
    const [x] = args;
    if (x == 'USD') {
      v = '$' + v;
    } else if (x == 'GBP') {
      v = '#' + v;
    }

    return v;
  }
}
