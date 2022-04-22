import { IArtwork } from 'src/app/shared/models/artwork.model';

export interface IArtworksState {
  artworks: IArtwork[];
}

export const initArtworksState: IArtworksState = {
  artworks: [],
};
