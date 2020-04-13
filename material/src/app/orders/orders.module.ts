import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderListComponent } from './../orders/order-list/order-list.component';
import { OrderNewComponent } from './order-new/order-new.component';
import { OrdersRoutingModule } from './orders-routing.module';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatTabsModule,
    MatMomentDateModule
  ],
  declarations: [OrderListComponent, OrderNewComponent]
})

export class OrdersModule { }
