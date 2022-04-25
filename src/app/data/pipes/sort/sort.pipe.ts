import { Pipe, PipeTransform } from '@angular/core';
import { IArtwork } from 'src/app/shared/models/artwork.model';

enum EDirect {
  asc = 1,
  desc = -1,
}

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(artworks: IArtwork[] | null, direction: 'asc' | 'desc' | null): IArtwork[] | null {
    if (!direction || !artworks) return artworks;

    return [...artworks]
      .sort((a, b) => EDirect[direction] * (a.title <= b.title ? -1 : 1));
  }
}
