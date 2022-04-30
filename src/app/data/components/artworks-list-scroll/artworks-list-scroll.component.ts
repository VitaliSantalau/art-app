import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/state/app.state';
import { MatTableDataSource } from '@angular/material/table';
import { selectUserArtworks } from 'src/app/redux/selectors/userArtworks.selectors';
import { CdkPortal, ComponentPortal } from '@angular/cdk/portal';


@Component({
  selector: 'app-artworks-list-scroll',
  templateUrl: './artworks-list-scroll.component.html',
  styleUrls: ['./artworks-list-scroll.component.scss'],
})

export class ArtworksListScrollComponent implements AfterViewInit { 
  public artworks$ = this.store.select(selectUserArtworks);


  @ViewChild(CdkPortal)
  private portal: CdkPortal;

  constructor(
    private readonly store: Store<IAppState>,
  ) {}


  ngAfterViewInit(): void {
    this.userSettingsPortal = new ComponentPortal(UserSettingsComponent);
  }

  this.userSettingsPortal = new ComponentPortal(UserSettingsComponent);
 
}
