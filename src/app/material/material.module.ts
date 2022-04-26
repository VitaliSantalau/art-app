import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  exports: [
    MatTabsModule,
    CdkTableModule,
  ],
})
export class MaterialModule { }
