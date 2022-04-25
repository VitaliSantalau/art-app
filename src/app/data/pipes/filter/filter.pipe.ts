import { Pipe, PipeTransform } from '@angular/core';
import { IArtwork } from 'src/app/shared/models/artwork.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(
    artworks: IArtwork[] | null, value: string | null,
  ): IArtwork[] | null {
    if (!artworks || !value) return artworks;

    return artworks.filter(
      (artwork) => artwork.title.toLowerCase()
        .includes(value.toLowerCase()),
    );
  }
}
