import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { ArtworksListComponent } from './components/artworks-list/artworks-list.component';
import { DataComponent } from './data.component';


@NgModule({
  declarations: [
    ArtworkComponent,
    ArtworksListComponent,
    DataComponent,
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
  ],
})
export class DataModule { }
