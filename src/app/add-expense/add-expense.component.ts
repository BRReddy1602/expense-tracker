import { Component, OnInit, Input, PipeTransform, Pipe, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  @Input() data: any;
  @Input() fields: any;
  @Output() public outputEvents = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  };
  // data: any = [{
  //   name: 'Name Of Product',
  //   price: 100,
  //   quantity: 2,
  //   category: 'Grocery',
  //   date: '06/03/2018',
  //   image: '3'
  // }];
  public onValueChange() {
    this.outputEvents.emit(this.data);
  }
}
