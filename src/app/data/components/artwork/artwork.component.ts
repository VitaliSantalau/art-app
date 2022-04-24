import { Component, Input } from '@angular/core';
import { IArtwork } from 'src/app/shared/models/artwork.model';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent {
  @Input()
  public artwork: IArtwork | null = null;
}
