import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserArtworks } from 'src/app/redux/selectors/userArtworks.selectors';
import { IAppState } from 'src/app/redux/state/app.state';
import { IUserArtwork } from 'src/app/shared/models/userArtwork.model';

export class TableDataSource extends DataSource<IUserArtwork> {
  public data = this.store.select(selectUserArtworks);

  constructor(private readonly store: Store<IAppState>) {
    super();
  }

  public connect(): Observable<IUserArtwork[]> {
    return this.data;
  }

  public disconnect(): void {}
}


@Component({
  selector: 'app-artworks-list-cdk',
  templateUrl: './artworks-list-cdk.component.html',
  styleUrls: ['./artworks-list-cdk.component.scss'],
})
export class ArtworksListCDKComponent implements OnInit {
  public dataSource!: TableDataSource;
  public displayedColumns: string[] = [
    'image', 'title', 'artist', 'date',
  ];

  constructor(
    private readonly store: Store<IAppState>,
  ) {}

  ngOnInit(): void {
    this.dataSource = new TableDataSource(this.store);
  }
}
