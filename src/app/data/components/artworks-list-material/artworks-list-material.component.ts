import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/state/app.state';
import { MatTableDataSource } from '@angular/material/table';
import { selectUserArtworks } from 'src/app/redux/selectors/userArtworks.selectors';
import { IUserArtwork } from 'src/app/shared/models/userArtwork.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-artworks-list-material',
  templateUrl: './artworks-list-material.component.html',
  styleUrls: ['./artworks-list-material.component.scss'],
})
export class ArtworksListMaterialComponent implements OnInit, AfterViewInit { 
  public dataSource = new MatTableDataSource<IUserArtwork>();
  public displayedColumns: string[] = [
    'image', 'title', 'artist_title', 'date',
  ];

  constructor(
    private readonly store: Store<IAppState>,
  ) {}

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngOnInit(): void {
    this.store.select(selectUserArtworks)
      .subscribe((artworks) => this.dataSource.data = artworks);
  }

  ngAfterViewInit(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
