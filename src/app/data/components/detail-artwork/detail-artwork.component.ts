import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectArtworks } from 'src/app/redux/selectors/artworks.selectors';
import { IAppState } from 'src/app/redux/state/app.state';
import { IArtwork } from 'src/app/shared/models/artwork.model';

@Component({
  selector: 'app-detail-artwork',
  templateUrl: './detail-artwork.component.html',
  styleUrls: ['./detail-artwork.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DetailArtworkComponent implements OnInit {
  public artwork: IArtwork | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<IAppState>,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.store.select(selectArtworks)
        .subscribe((artworks) => {
          this.artwork = artworks.find((artwork) => artwork.id === +id);
        });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
