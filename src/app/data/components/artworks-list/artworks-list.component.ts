import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectArtworks } from 'src/app/redux/selectors/artworks.selectors';
import { IAppState } from 'src/app/redux/state/app.state';
import { IArtwork } from 'src/app/shared/models/artwork.model';

@Component({
  selector: 'app-artworks-list',
  templateUrl: './artworks-list.component.html',
  styleUrls: ['./artworks-list.component.scss'],
})
export class ArtworksListComponent implements OnInit, OnDestroy, OnChanges {
  public artworks: IArtwork[] | null = null;
  public subscription: Subscription | undefined;

  // public artworks$ = this.store.select(selectArtworks);
  // I prefer to use async pipe

  @Input() filterValue: string | null = null;
  @Input() direction: 'asc' | 'desc' | null = null;

  constructor(
    private readonly store: Store<IAppState>,
  ) { }
 
  ngOnInit(): void {
    this.subscription = this.store.select(selectArtworks)
      .subscribe((artworks) => this.artworks = artworks);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (propName === 'filterValue') {
        const value = changes['filterValue'].currentValue;
        console.log(`filter value was changed to ${value}`);
      }
      if (propName === 'direction') {
        const value = changes['direction'].currentValue;
        console.log(`direction was changed to ${value}`);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
