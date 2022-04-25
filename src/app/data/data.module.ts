import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { ArtworksListComponent } from './components/artworks-list/artworks-list.component';
import { DataComponent } from './data.component';
import { DetailArtworkComponent } from './components/detail-artwork/detail-artwork.component';
import { MainComponent } from './pages/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';

@NgModule({
  declarations: [
    ArtworkComponent,
    ArtworksListComponent,
    DataComponent,
    DetailArtworkComponent,
    MainComponent,
    SettingsComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
  ],
})
export class DataModule { }
