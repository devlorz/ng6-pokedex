import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PokemonCardComponent, SearchBarComponent, PokemonListComponent]
})
export class PokemonModule {}
