import { createReducer, on } from '@ngrx/store';
import { loadArtworksSuccess } from '../actions/artworks.actions';
import { initArtworksState } from '../state/artworks.state';

export const artworksReducer = createReducer(
  initArtworksState,
  on(
    loadArtworksSuccess, (state, { artworks }) => {
      return {
        ...state,
        artworks,
      };
    },
  ),
);