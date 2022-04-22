import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworksListComponent } from './components/artworks-list/artworks-list.component';
import { DataComponent } from './data.component';

const routes: Routes = [
  {
    path: 'data', component: DataComponent,
    children: [
      {
        path: '', redirectTo: 'artworks', pathMatch: 'full',
      },
      {
        path: 'artworks',
        component: ArtworksListComponent,
      },
      // {
      //   path: 'artworks/:id',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule { }
