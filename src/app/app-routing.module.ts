import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'data', pathMatch: 'full',
  },
  { 
    path: 'data',
    component: DataComponent,
  },
  {
    path: '**', component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }