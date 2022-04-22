import { createAction, props } from '@ngrx/store';
import { IArtwork } from 'src/app/shared/models/artwork.model';

export const loadArtworks = createAction(
  '[App Component], Load Artworks',
);

export const loadArtworksSuccess = createAction(
  '[Artworks API], Artworks Loaded Success',
  props<{ artworks: IArtwork[] }>(),
);
