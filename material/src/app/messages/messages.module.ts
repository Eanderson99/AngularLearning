import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageListComponent } from './message-list/message-list.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessageNewComponent } from './message-new/message-new.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatAutocompleteModule
  ],
  declarations: [MessageListComponent, MessageNewComponent]
})

export class MessagesModule { }
