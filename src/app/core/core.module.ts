import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppMaterialModule } from '../app-material.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule],
  declarations: [SidenavComponent, ToolbarComponent, HomeComponent]
})
export class CoreModule {}
