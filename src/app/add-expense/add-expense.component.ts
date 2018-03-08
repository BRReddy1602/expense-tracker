import { Component, OnInit, Input, PipeTransform, Pipe, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  @Input() data: any;
  @Input() fields: any;
  @Output() public outputEvents = new EventEmitter<any>();
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
  constructor(private httpClient:HttpClient){  }
  public addNewExpense(newExpense) {
    this.httpClient.post(`https://my-json-server.typicode.com/BRReddy1602/expense-tracker-db/data`,
    newExpense)
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }
  //this.outputEvents.emit(this.data);
}
