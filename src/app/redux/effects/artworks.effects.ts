import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

@Injectable()
export class ArtworksEffects {
  loadArtworks$ = createEffect(() => this.actions$.pipe(
    ofType('[App Component], Load Artworks'),
    tap(() => console.log('start loading')),
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
  ) {}
}