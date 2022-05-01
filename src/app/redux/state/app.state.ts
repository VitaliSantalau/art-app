import { IArtworksState, initArtworksState } from './artworks.state';
import { initUserArtworksState, IUserArtworksState } from './user-artworks.state';

export interface IAppState {
  artworksState: IArtworksState;
  userArtworksState: IUserArtworksState
}

export const initAppState: IAppState = {
  artworksState: initArtworksState,
  userArtworksState: initUserArtworksState,
};
