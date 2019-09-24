import { ChatAppComponent } from './chat-app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    ChatAppComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      { path: '', component: ChatAppComponent }
    ])
  ]
})
export class ChatAppModule { }
