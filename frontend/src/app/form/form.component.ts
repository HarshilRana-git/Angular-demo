import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  name1: string = '';
  name2: string = '';
  name3: string = '';
  name4: string = '';

  onSubmit() {
    console.log('Name 1:', this.name1);
    console.log('Name 2:', this.name2);
    console.log('Name 3:', this.name3);
    console.log('Name 4:', this.name4);
  }
}
