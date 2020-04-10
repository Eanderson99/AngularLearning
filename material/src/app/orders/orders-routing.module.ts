import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: OrderListComponent}
]

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [OrderListComponent]
})

export class OrdersRoutingModule { }
