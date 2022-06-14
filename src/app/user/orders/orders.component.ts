import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  price: Number;
  updated: Date;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  orders: Section[] = [
    {
      name: 'Slippers',
      price: 500,
      updated: new Date('1/1/16'),
    },
    {
      name: 'Books',
      price: 500,
      updated: new Date('1/17/16'),
    },
    {
      name: 'Toner',
      price: 500,
      updated: new Date('1/28/16'),
    },
  ];

}
