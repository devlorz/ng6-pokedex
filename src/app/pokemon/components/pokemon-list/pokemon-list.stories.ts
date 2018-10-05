import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';

import { CapitalizePipe } from '../../../shared/capitalize.pipe';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { AppMaterialModule } from './../../../app-material.module';
import { PokemonListComponent } from './pokemon-list.component';

storiesOf('Pokemon List', module).add('initial', () => ({
  component: PokemonListComponent,
  moduleMetadata: {
    declarations: [PokemonCardComponent, CapitalizePipe],
    imports: [AppMaterialModule]
  },
  props: {
    pokemonList: [
      {
        name: 'Bulbasur 1',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['grass'],
        id: 1
      },
      {
        name: 'Bulbasur 2',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['fire'],
        id: 2
      },
      {
        name: 'Bulbasur 3',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['water'],
        id: 3
      }
    ]
  },
  openDialog: action('openDialog')
}));
