import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/state/app.state';
import { selectUserArtworks } from 'src/app/redux/selectors/userArtworks.selectors';
import { IArtwork } from 'src/app/shared/models/artwork.model';
import { DynamicArtworkComponent } from '../dynamic-artwork/dynamic-artwork.component';


@Component({
  selector: 'app-artworks-list-scroll',
  templateUrl: './artworks-list-scroll.component.html',
  styleUrls: ['./artworks-list-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArtworksListScrollComponent implements OnInit { 
  public artworks$ = this.store.select(selectUserArtworks);
  private componentRef: ComponentRef<DynamicArtworkComponent> | undefined;

  @ViewChild('artworkHost', { read: ViewContainerRef }) artworkHost: ViewContainerRef | undefined;
 
  constructor(
    private readonly store: Store<IAppState>,
    private ref: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.ref.detach();
  }

  public show(): void {
    this.ref.reattach();
  }

  public handleClick(artwork: IArtwork): void {
    this.artworkHost?.clear();

    this.componentRef = this.artworkHost?.createComponent(DynamicArtworkComponent);

    if (this.componentRef) {
      this.componentRef.instance.artwork = artwork;
    }
  }

  public clear(): void {
    this.artworkHost?.clear();
  }
 
}
