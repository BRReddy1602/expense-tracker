import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {
  @Input() value:any;
  @Input() field:any;
  @Output() public outputEvent = new EventEmitter<any>();
    constructor() {
     }
    ngOnInit() {
    }
    public onValueChange(val) {
      this.value = val;
      this.outputEvent.emit(this.value);
    }
}
