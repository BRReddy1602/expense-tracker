import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  public valueChange(e, val){
    this.outputEvents.emit(this.value);
  }
}
