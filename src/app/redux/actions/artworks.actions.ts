import { createAction, props } from '@ngrx/store';
import { IArtworksState } from '../state/artworks.state';

export const loadArtworks = createAction(
  '[App Component], Load Artworks',
);

export const loadArtworksSuccess = createAction(
  '[Artworks API], Artworks Loaded Success',
  props<{ data: IArtworksState }>(),
);

export const loadArtworksError = createAction(
  '[Artworks API], Artworks Loaded Error',
);
