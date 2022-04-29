import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { DataService } from 'src/app/data/services/data/data.service';
import { loadArtworks, loadArtworksSuccess } from '../actions/artworks.actions';

@Injectable()
export class ArtworksEffects {
  loadArtworks$ = createEffect(() => this.actions$.pipe(
    ofType(loadArtworks),
    switchMap(() => this.dataService.getArtworks()
      .pipe(
        map((data) => loadArtworksSuccess({ data })),
      ),
    ),
  ));

  constructor(
    private actions$: Actions,
    private dataService: DataService,
  ) {}
}
