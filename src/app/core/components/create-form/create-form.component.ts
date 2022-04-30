import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addUserArtwork } from 'src/app/redux/actions/user-artwork.actions';
import { IUserArtwork } from 'src/app/shared/models/userArtwork.model';
import getRandomNumber from 'src/app/shared/utils/getRandomNumber';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent {
  public createForm: FormGroup = this.fb.group({
    image: ['', Validators.required],
    title: ['', Validators.required],
    artist: ['', Validators.required],
    date: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private readonly store: Store,
    private notification: MatSnackBar,
  ) { }

  public submit():void {
    const { image, title, artist, date } = this.createForm.value;
    const data: IUserArtwork = { 
      id: getRandomNumber(0, 1000),
      image_url: image,
      title,
      artist_title: artist,
      date_display: date,
    };

    this.store.dispatch(addUserArtwork({ data }));

    this.notification.open('Artwork was created', 'ok', {
      duration: 4000,
    });
  }
}
