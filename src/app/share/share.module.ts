import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';

@NgModule({
  declarations: [ChatListComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ChatListComponent]
})
export class ShareModule { }
