import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollingModule } from '@angular/cdk/scrolling'; 

@NgModule({
  exports: [
    MatTabsModule,
    CdkTableModule,
    ScrollingModule,
  ],
})
export class MaterialModule { }
