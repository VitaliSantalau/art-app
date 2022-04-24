import { IArtwork } from 'src/app/shared/models/artwork.model';
import { IPagination } from 'src/app/shared/models/responsData.model';

export interface IArtworksState {
  pagination: IPagination | null;
  artworks: IArtwork[];
}

export const initArtworksState: IArtworksState = {
  pagination: null,
  artworks: [
    // {
    //   id: 5,
    //   image_url: '',
    //   title: 'After the Hurricane, Bahamas',
    //   date_display: '1930',
    //   publication_history: 'history',
    //   classification_title: 'oil on canvas',
    //   style_title: 'Surrealism',
    //   artist_title: 'Morris Kantor',
    //   artist_display: 'Morris Kantor\nAmerican, born Russia (now Belarus), 1896–1974',
    // },
  ],
};
