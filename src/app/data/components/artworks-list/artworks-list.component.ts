import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectArtworks } from 'src/app/redux/selectors/artworks.selectors';
import { IAppState } from 'src/app/redux/state/app.state';

@Component({
  selector: 'app-artworks-list',
  templateUrl: './artworks-list.component.html',
  styleUrls: ['./artworks-list.component.scss'],
})
export class ArtworksListComponent {
  public artworks$ = this.store.select(selectArtworks);

  constructor(
    private readonly store: Store<IAppState>,
  ) { }
}
