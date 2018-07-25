import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListWrapperComponent } from './containers/pokemon-list-wrapper/pokemon-list-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {}
