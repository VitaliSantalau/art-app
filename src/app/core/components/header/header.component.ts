import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isLogged: boolean = false;
  public isShowSettings: boolean = false;

  public toggleSettings(): void {
    console.log('hi');
    this.isShowSettings = !this.isShowSettings;
  }
}
