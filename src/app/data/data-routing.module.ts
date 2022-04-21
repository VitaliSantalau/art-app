import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworksListComponent } from './components/artworks-list/artworks-list.component';

const routes: Routes = [
  {
    path: 'data', 
    children: [
      {
        path: '',
        component: ArtworksListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule { }
