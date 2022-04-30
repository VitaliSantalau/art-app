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
import { UserComponent } from './pages/user/user.component';
import { MaterialModule } from '../material/material.module';
import { ArtworksListCDKComponent } from './components/artworks-list-cdk/artworks-list-cdk.component';
import { ArtworksListMaterialComponent } from './components/artworks-list-material/artworks-list-material.component';
import { ArtworksListScrollComponent } from './components/artworks-list-scroll/artworks-list-scroll.component';
import { DynamicArtworkComponent } from './components/dynamic-artwork/dynamic-artwork.component';


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
    UserComponent,
    ArtworksListCDKComponent,
    ArtworksListMaterialComponent,
    ArtworksListScrollComponent,
    DynamicArtworkComponent,
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    MaterialModule,
  ],
})
export class DataModule { }
