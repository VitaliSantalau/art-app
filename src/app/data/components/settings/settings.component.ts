import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SettingsComponent { 
  public direction: 'asc' | 'desc' | null = null;

  @Output() public sendFilterValue = new EventEmitter<string>();
  @Output() public sendSortDirection = new EventEmitter<'asc' | 'desc' | null>();

  public handleSort(): void {
    this.setDirection();
    this.sendSortDirection.emit(this.direction);
  }

  private setDirection(): void {
    switch (this.direction) {
      case 'asc':
        this.direction = 'desc';
        break;
      case 'desc': 
        this.direction = null;
        break;
      default:
        this.direction = 'asc';
    }
  }

  public handleFilter(value: string): void {
    this.sendFilterValue.emit(value);
  }
}
