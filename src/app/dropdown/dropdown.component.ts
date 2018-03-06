import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() value: any;
  @Input() options: any;
  @Output() public outputEvents = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {
  }

  public valueChange(e, val) {
    this.outputEvents.emit(this.value);
  }
}
