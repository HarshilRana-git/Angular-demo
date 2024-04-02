import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}
  @Output() updateDataEvent = new EventEmitter<string>();
  @Input() item: any;
  ngOnInit(): void {}
}
