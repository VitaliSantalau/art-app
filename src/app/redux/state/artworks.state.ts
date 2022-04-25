import { IArtwork } from 'src/app/shared/models/artwork.model';
import { IPagination } from 'src/app/shared/models/responsData.model';

export interface IArtworksState {
  pagination: IPagination | null;
  artworks: IArtwork[];
}

export const initArtworksState: IArtworksState = {
  pagination: null,
  artworks: [],
};
