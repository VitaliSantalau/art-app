import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public filterValue: string | null = null;
  public direction: 'asc' | 'desc' | null = null;

  public setFilterWord(value: string): void {
    this.filterValue = value;
  }

  public setSortDirection(direction: 'asc' | 'desc' | null): void {
    this.direction = direction;
  }
}
