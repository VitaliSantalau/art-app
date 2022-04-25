import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IArtworksState } from '../state/artworks.state';

const selectArtworksState = (state: IAppState): IArtworksState => {
  return state.artworksState;
};

export const selectArtworks = createSelector(
  selectArtworksState,
  (state) => state.artworks,
);
