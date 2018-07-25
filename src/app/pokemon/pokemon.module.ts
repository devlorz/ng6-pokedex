import { AppMaterialModule } from './../app-material.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonListWrapperComponent } from './containers/pokemon-list-wrapper/pokemon-list-wrapper.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, PokemonRoutingModule, AppMaterialModule],
  declarations: [
    PokemonCardComponent,
    SearchBarComponent,
    PokemonListComponent,
    PokemonListWrapperComponent
  ]
})
export class PokemonModule {}
