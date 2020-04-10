import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageListComponent } from './message-list/message-list.component';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule
  ],
  declarations: [MessageListComponent]
})

export class MessagesModule { }
