import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-artworks-list',
  templateUrl: './artworks-list.component.html',
  styleUrls: ['./artworks-list.component.scss'],
})
export class ArtworksListComponent implements OnInit {
  public artworks = this.dataService.data$;

  constructor(
    private readonly dataService: DataService,
  ) { }

  ngOnInit(): void {
    
  }

}
