import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expense Tracker';
  data: any = [{
    name: 'Name Of Product',
    price: 100,
    quantity: 2,
    category: 'Grocery',
    date: '06/03/2018',
    image: '3'
  }];
  fields: any = [
    {
      field: 'name',
      description: 'Name Of The Product',
      element: 'text'
    },
    {
      field: 'price',
      description: 'Price',
      element: 'number'
    },
    {
      field: 'quantity',
      description: 'Quantity',
      element: 'number'
    },
    {
      field: 'category',
      description: 'Category',
      element: 'dropdown',
      options: ['Grocery', 'Petrol', 'Medical', 'Vegetables', 'Fruits', 'Rent', 'EMI', 'Chits', 'Electricity Bill', 'Shopping', 'Resturant', 'Others']
    },
    {
      field: 'date',
      description: 'Date',
      element: 'date'
    },
    {
      field: 'image',
      description: 'Image',
      element: 'image',
      hide: true
    }
  ];

  public addsNewExpense(newExpense) {
    console.log(newExpense);
    this.httpClient.get('https://my-json-server.typicode.com/BRReddy1602/expense-tracker-db/profiles')
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          debugger;
        }
      }
    )
  }

  constructor(private httpClient:HttpClient){  }

  addNewExpense(newExpense){
    this.httpClient.post(`https://my-json-server.typicode.com/BRReddy1602/expense-tracker-db/profiles`,
    newExpense)
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }
}
