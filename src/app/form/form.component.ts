import { Component, OnInit, Input, PipeTransform, Pipe, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data: any;
  @Input() fields: any;
  @Output() public outputEvents = new EventEmitter<any>();

  constructor() {
    this.outputEvents.emit(this.data);
  }

  ngOnInit() {
  }

}
