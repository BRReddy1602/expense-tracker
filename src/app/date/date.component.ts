declare var jquery: any;
declare var $: any;
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input() value: number;
  @Output() public outputEvents = new EventEmitter<number>();
  constructor() { }
  ngOnInit() {
    $("#form-date-picker").datepicker();
  }

  public valueChange(e, val) {
    this.outputEvents.emit(this.value);
  }
}
