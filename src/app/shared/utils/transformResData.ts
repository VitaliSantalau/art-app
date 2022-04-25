/* eslint-disable @typescript-eslint/naming-convention */
import { IArtworksState } from 'src/app/redux/state/artworks.state';
import { IResponseData, IResponseItemData } from '../models/responsData.model';

function transformResData(response: IResponseData): IArtworksState {
  const { pagination, data, config } = response;

  const artworks = data.map((item: IResponseItemData) => {
    const { 
      id,
      image_id,
      title,
      date_display,
      publication_history,
      classification_title,
      style_title,
      artist_title,
      artist_display,
    } = item;

    return {
      id,
      image_url: `${config.iiif_url}/${image_id}/full/200,/0/default.jpg`,
      title,
      date_display,
      publication_history,
      classification_title,
      style_title,
      artist_title,
      artist_display,
    };
  });

  return {
    pagination,
    artworks,
  };
}

export default transformResData;
