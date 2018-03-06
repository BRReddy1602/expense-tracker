import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {
  @Input() value:number;
  @Input() field:any;
  @Output() public outputEvents = new EventEmitter<number>();
    constructor() { }
    ngOnInit() {
    }
  
    public valueChange(e, val){
      this.outputEvents.emit(this.value);
    }
}
