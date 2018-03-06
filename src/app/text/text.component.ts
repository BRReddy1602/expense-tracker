import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() value:any;
  @Output() public outputEvents = new EventEmitter<any>();
    constructor() { }
    ngOnInit() {
    }
  
    public valueChange(e, val){
      this.outputEvents.emit(this.value);
    }

}
