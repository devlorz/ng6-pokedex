import { CapitalizePipe } from './capitalize.pipe';
import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [AppComponent, PokemonCardComponent, CapitalizePipe, SearchBarComponent],
  imports: [
    AppMaterialModule,
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
