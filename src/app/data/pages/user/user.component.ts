import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFormComponent } from 'src/app/core/components/create-form/create-form.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent { 

  constructor(public form: MatDialog) {}

  public openForm(): void {
    this.form.open(CreateFormComponent);
  }
}
