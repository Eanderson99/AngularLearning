import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

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
  dataSource: MatTableDataSource<object>;

  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 10];
  pageEvent: PageEvent;
 
  @ViewChild(MatSort) sort: MatSort;
 
  loadData(pageIndex: number, pageSize: number) {
    this.dataSource = new MatTableDataSource<object>(ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize));
  }

  ngOnInit(): void {
    this.loadData(0, this.pageSize);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
  }

  onPageChange(event) {
    const previousPageIndex = event.previousPageIndex;
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    const length = event.length;

    this.loadData(this.pageIndex, this.pageSize);
  }

  selectAll() {
    for(var elem of ELEMENT_DATA) {
      elem.isChecked = !elem.isChecked;
    }
  }

}
