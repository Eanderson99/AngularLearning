import { CustomersRoutingModule } from './customers-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerListComponent]
})

export class CustomersModule { }
