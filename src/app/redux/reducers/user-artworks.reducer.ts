import { createReducer, on } from '@ngrx/store';
import { addUserArtwork } from '../actions/user-artwork.actions';

import { initUserArtworksState } from '../state/user-artworks.state';

export const userArtworksReducer = createReducer(
  initUserArtworksState,
  on(
    addUserArtwork, (state, { data }) => {
      return {
        ...state,
        artworks: [data, ...state.artworks],
      };
    },
  ),
);
