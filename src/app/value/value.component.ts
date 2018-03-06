import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isNumber } from 'util';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
@Input() value:number;
@Output() public outputEvents = new EventEmitter<number>();
  constructor() { }
  ngOnInit() {
  }

  public valueChange(val){
    if(!this.value || this.value < 0 || !isNumber(this.value) || this.value===null)
      val = this.value = 0;
    this.outputEvents.emit(this.value);
  }
}