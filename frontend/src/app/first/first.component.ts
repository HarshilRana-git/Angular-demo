import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  cval = 0;
  inptext: string = '';
  dropval: string = '';

  getCounter(val: number) {
    this.cval += val;
    if (this.cval < 0) {
      this.cval = 0;
    }
    return this.cval;
  }
}
