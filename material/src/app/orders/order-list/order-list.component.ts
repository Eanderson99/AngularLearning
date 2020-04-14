import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

const ELEMENT_DATA = [
  {
    isChecked: false,
    orderNumber: 100,
    orderDate: new Date(),
    description: '2lbs of tuna',
    total: 29.99
  },
  {
    isChecked: false,
    orderNumber: 101,
    orderDate: new Date(),
    description: '3lbs of tuna',
    total: 49.99
  },
  {
    isChecked: false,
    orderNumber: 102,
    orderDate: new Date(),
    description: '7lbs of tuna',
    total: 69.99
  },
  {
    isChecked: false,
    orderNumber: 103,
    orderDate: new Date(),
    description: '7lbs of tuna',
    total: 69.99
  },
  {
    isChecked: false,
    orderNumber: 104,
    orderDate: new Date(),
    description: '7lbs of tuna',
    total: 69.99
  },
  {
    isChecked: false,
    orderNumber: 105,
    orderDate: new Date(),
    description: '7lbs of tuna',
    total: 69.99
  },
  {
    isChecked: false,
    orderNumber: 102,
    orderDate: new Date(),
    description: '7lbs of tuna',
    total: 69.99
  }
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 
  @ViewChild(MatSort) sort: MatSort;
 
  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  selectAll() {
    for(var elem of ELEMENT_DATA) {
      elem.isChecked = !elem.isChecked;
    }
  }

}
