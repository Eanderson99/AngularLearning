import { OrderNewComponent } from './order-new/order-new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: OrderListComponent},
  { path: 'new', component: OrderNewComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class OrdersRoutingModule { }
