import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'chat', loadChildren: './chat-app/chat-app.module#ChatAppModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
