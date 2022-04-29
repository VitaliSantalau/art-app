import { artworksReducer } from './artworks.reducer';
import { userArtworksReducer } from './user-artworks.reducer';

export const reducers = {
  artworksState: artworksReducer,
  userArtworksState: userArtworksReducer,
};
