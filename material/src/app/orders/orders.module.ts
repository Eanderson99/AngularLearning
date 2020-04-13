import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderListComponent } from './../orders/order-list/order-list.component';

// Material
import { MatTabsModule } from '@angular/material/tabs'; 
import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTabsModule
  ],
  declarations: [OrderListComponent]
})

export class OrdersModule { }
