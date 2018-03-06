import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expense Tracker';
  data:any = [{
    label: 'Name Of Product',
    price: 100,
    quantity: 2,
    category: 'grocery',
    date: '06/03/2018',
    image: '3'
  }];
}
