import { HttpClientModule } from '@angular/common/http';
import { storiesOf } from '@storybook/angular';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

storiesOf('Pokemon List', module).add('initial', () => ({
  component: PokemonListComponent,
  moduleMetadata: {
    declarations: [PokemonCardComponent],
    imports: [MatCardModule, MatButtonModule, HttpClientModule]
  },
  props: {
    pokemonList: [
      {
        name: 'Bulbasur 1',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['grass']
      },
      {
        name: 'Bulbasur 2',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['fire']
      },
      {
        name: 'Bulbasur 3',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['water']
      }
    ]
  }
}));
