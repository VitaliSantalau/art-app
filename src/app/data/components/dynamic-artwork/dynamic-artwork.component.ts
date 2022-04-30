import { Component, Input } from '@angular/core';
import { IArtwork } from 'src/app/shared/models/artwork.model';

@Component({
  selector: 'app-dynamic-artwork',
  templateUrl: './dynamic-artwork.component.html',
  styleUrls: ['./dynamic-artwork.component.scss'],
})
export class DynamicArtworkComponent {
  @Input() artwork: IArtwork | undefined;
}
