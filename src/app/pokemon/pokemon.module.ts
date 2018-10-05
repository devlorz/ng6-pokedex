import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../app-material.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonDetailWrapperComponent } from './containers/pokemon-detail-wrapper/pokemon-detail-wrapper.component';
import { PokemonListWrapperComponent } from './containers/pokemon-list-wrapper/pokemon-list-wrapper.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  entryComponents: [PokemonDetailWrapperComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    AppMaterialModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PokemonCardComponent,
    SearchBarComponent,
    PokemonListComponent,
    PokemonListWrapperComponent,
    PokemonDetailComponent,
    PokemonDetailWrapperComponent
  ]
})
export class PokemonModule {}
