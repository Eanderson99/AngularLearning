import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { OrderListComponent } from './../orders/order-list/order-list.component';

const routes: Routes = [
  { path: '', component: OrderListComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  declarations: [OrderListComponent]
})

export class OrdersModule { }
