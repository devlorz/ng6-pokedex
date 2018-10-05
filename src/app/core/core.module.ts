import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../app-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [SidenavComponent, ToolbarComponent, HomeComponent]
})
export class CoreModule {}
