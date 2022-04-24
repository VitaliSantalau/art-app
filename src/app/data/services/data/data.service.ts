import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IResponseData } from 'src/app/shared/models/responsData.model';
import transformResData from 'src/app/shared/utils/transformResData';
import { IArtworksState } from 'src/app/redux/state/artworks.state';

const url = 'https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,date_display,publication_history,classification_title,style_title,artist_title,artist_display';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  constructor(
    private http: HttpClient,
  ) {}

  getArtworks(): Observable<IArtworksState> {
    return this.http.get<IResponseData>(url)
      .pipe(
        map((data) => transformResData(data)),
      );
  }
}
