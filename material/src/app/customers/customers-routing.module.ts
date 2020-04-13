import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CustomerListComponent},
  { path: 'info', component: CustomerCardComponent},
  { path: 'new', component: CustomerNewComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class CustomersRoutingModule { }
