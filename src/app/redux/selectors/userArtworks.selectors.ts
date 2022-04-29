import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IUserArtworksState } from '../state/user-artworks.state';

const selectUserArtworksState = (state: IAppState): IUserArtworksState => {
  return state.userArtworksState;
};

export const selectUserArtworks = createSelector(
  selectUserArtworksState,
  (state) => state.artworks,
);
