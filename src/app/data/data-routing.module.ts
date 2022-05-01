import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailArtworkComponent } from './components/detail-artwork/detail-artwork.component';
import { DataComponent } from './data.component';
import { MainComponent } from './pages/main/main.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: 'data', component: DataComponent,
    children: [
      {
        path: '', redirectTo: 'artworks', pathMatch: 'full',
      },
      {
        path: 'artworks',
        component: MainComponent,
      },
      {
        path: 'artworks/:id',
        component: DetailArtworkComponent,
      },
      {
        path: 'user-artworks',
        component: UserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule { }
