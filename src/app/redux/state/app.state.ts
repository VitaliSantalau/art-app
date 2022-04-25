import { IArtworksState, initArtworksState } from './artworks.state';

export interface IAppState {
  artworksState: IArtworksState; 
}

export const initAppState: IAppState = {
  artworksState: initArtworksState,
};
