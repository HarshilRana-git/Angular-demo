import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { SecondComponent } from './second/second.component';
import { userData } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentData = 'Data from parent';
  homestatus = true;

  updateData(item: string) {
    let regex = new RegExp('typescript', 'i');
    console.log(item);
  }

  homeactive() {
    this.homestatus = !this.homestatus;
  }

  hometogg() {
    this.homestatus = false;
  }

  data: userData = {
    name: 'HR',
    id: 101,
    address: 'Hillsboro, OR',
  };
}
