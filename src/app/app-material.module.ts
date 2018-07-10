import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
  ]
})
export class AppMaterialModule {}
