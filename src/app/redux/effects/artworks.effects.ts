import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { DataService } from 'src/app/data/services/data/data.service';
import { loadArtworks, loadArtworksError, loadArtworksSuccess } from '../actions/artworks.actions';

@Injectable()
export class ArtworksEffects {
  loadArtworks$ = createEffect(() => this.actions$.pipe(
    ofType(loadArtworks),
    tap(() => console.log('start spinner')),
    switchMap(() => this.dataService.getArtworks()
      .pipe(
        map((data) => loadArtworksSuccess({ data })),
        catchError(() => of(loadArtworksError())),
        tap(() => console.log('stop spinner')),
      ),
    ),
  ));

  constructor(
    private actions$: Actions,
    private dataService: DataService,
  ) {}
}