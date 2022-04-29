import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/state/app.state';
import { MatTableDataSource } from '@angular/material/table';
import { selectUserArtworks } from 'src/app/redux/selectors/userArtworks.selectors';
import { IUserArtwork } from 'src/app/shared/models/userArtwork.model';


@Component({
  selector: 'app-artworks-list-scroll',
  templateUrl: './artworks-list-scroll.component.html',
  styleUrls: ['./artworks-list-scroll.component.scss'],
})

export class ArtworksListScrollComponent implements OnInit { 
  public dataSource = new MatTableDataSource<IUserArtwork>();
  public displayedColumns: string[] = [
    'image', 'title', 'artist_title', 'date',
  ];

  constructor(
    private readonly store: Store<IAppState>,
  ) {}


  ngOnInit(): void {
    this.store.select(selectUserArtworks)
      .subscribe((artworks) => this.dataSource.data = artworks);
  }

 
}
