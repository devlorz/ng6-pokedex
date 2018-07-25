import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppMaterialModule } from '../app-material.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
