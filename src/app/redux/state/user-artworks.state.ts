import { IUserArtwork } from 'src/app/shared/models/userArtwork.model';

export interface IUserArtworksState {
  artworks: IUserArtwork[];
}

export const initUserArtworksState: IUserArtworksState = {
  artworks: [
    {
      id: 1,
      image_url: 'https://www.artic.edu/iiif/2/bb49cbcd-0cf6-35ac-96cf-ca51d5f9a696/full/200,/0/default.jpg',
      title: 'The Conversion of Saint Paul', 
      date_display: 'ca. 1644-1680',
      style_title: 'engraving',
      artist_title: 'Schelte Adamsz. Bolswert',
    },
    {
      id: 2,
      image_url: 'https://www.artic.edu/iiif/2/75723edd-b4ea-1c37-934a-d9e355c8c893/full/200,/0/default.jpg',
      title: 'A Young Woman Giving Directions to a Person', 
      date_display: '1621/33',
      style_title: 'engraving',
      artist_title: 'Jean Le Pautre',
    },
    {
      id: 3,
      image_url: 'https://www.artic.edu/iiif/2/655a168b-7f9d-be19-615a-eb63adf20e7b/full/200,/0/default.jpg',
      title: 'The Three Skulls', 
      date_display: '1902/06',
      style_title: 'watercolor',
      artist_title: 'Paul Cezanne',
    },
    {
      id: 4,
      image_url: 'https://www.artic.edu/iiif/2/bb49cbcd-0cf6-35ac-96cf-ca51d5f9a696/full/200,/0/default.jpg',
      title: 'The Conversion of Saint Paul', 
      date_display: 'ca. 1644-1680',
      style_title: 'engraving',
      artist_title: 'Schelte Adamsz. Bolswert',
    },
    {
      id: 5,
      image_url: 'https://www.artic.edu/iiif/2/75723edd-b4ea-1c37-934a-d9e355c8c893/full/200,/0/default.jpg',
      title: 'A Young Woman Giving Directions to a Person', 
      date_display: '1621/33',
      style_title: 'engraving',
      artist_title: 'Jean Le Pautre',
    },
    {
      id: 6,
      image_url: 'https://www.artic.edu/iiif/2/655a168b-7f9d-be19-615a-eb63adf20e7b/full/200,/0/default.jpg',
      title: 'The Three Skulls', 
      date_display: '1902/06',
      style_title: 'watercolor',
      artist_title: 'Paul Cezanne',
    },
    {
      id: 7,
      image_url: 'https://www.artic.edu/iiif/2/bb49cbcd-0cf6-35ac-96cf-ca51d5f9a696/full/200,/0/default.jpg',
      title: 'The Conversion of Saint Paul', 
      date_display: 'ca. 1644-1680',
      style_title: 'engraving',
      artist_title: 'Schelte Adamsz. Bolswert',
    },
    {
      id: 8,
      image_url: 'https://www.artic.edu/iiif/2/75723edd-b4ea-1c37-934a-d9e355c8c893/full/200,/0/default.jpg',
      title: 'A Young Woman Giving Directions to a Person', 
      date_display: '1621/33',
      style_title: 'engraving',
      artist_title: 'Jean Le Pautre',
    },
    {
      id: 9,
      image_url: 'https://www.artic.edu/iiif/2/655a168b-7f9d-be19-615a-eb63adf20e7b/full/200,/0/default.jpg',
      title: 'The Three Skulls', 
      date_display: '1902/06',
      style_title: 'watercolor',
      artist_title: 'Paul Cezanne',
    },
    {
      id: 10,
      image_url: 'https://www.artic.edu/iiif/2/bb49cbcd-0cf6-35ac-96cf-ca51d5f9a696/full/200,/0/default.jpg',
      title: 'The Conversion of Saint Paul', 
      date_display: 'ca. 1644-1680',
      style_title: 'engraving',
      artist_title: 'Schelte Adamsz. Bolswert',
    },
    {
      id: 11,
      image_url: 'https://www.artic.edu/iiif/2/75723edd-b4ea-1c37-934a-d9e355c8c893/full/200,/0/default.jpg',
      title: 'A Young Woman Giving Directions to a Person', 
      date_display: '1621/33',
      style_title: 'engraving',
      artist_title: 'Jean Le Pautre',
    },
    {
      id: 12,
      image_url: 'https://www.artic.edu/iiif/2/655a168b-7f9d-be19-615a-eb63adf20e7b/full/200,/0/default.jpg',
      title: 'The Three Skulls', 
      date_display: '1902/06',
      style_title: 'watercolor',
      artist_title: 'Paul Cezanne',
    },
  ],
};
