import { createAction, props } from '@ngrx/store';
import { IUserArtwork } from 'src/app/shared/models/userArtwork.model';

export const addUserArtwork = createAction(
  '[User Page], Add Iser Artwork',
  props<{ data: IUserArtwork }>(),
);
