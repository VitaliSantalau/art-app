import { Component, Input } from '@angular/core';
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

  @Input() filterValue: string | null = null;
  @Input() direction: 'asc' | 'desc' | null = null;

  constructor(
    private readonly store: Store<IAppState>,
  ) { }
}
