import { PokemonDataService } from './services/pokemon-data.service';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './../shared/capitalize.pipe';
import { AppMaterialModule } from './../app-material.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { NgModule } from '@angular/core';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonListWrapperComponent } from './containers/pokemon-list-wrapper/pokemon-list-wrapper.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonDetailWrapperComponent } from './containers/pokemon-detail-wrapper/pokemon-detail-wrapper.component';

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
