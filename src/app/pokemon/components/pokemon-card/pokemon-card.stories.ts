import { storiesOf } from '@storybook/angular';
import { PokemonCardComponent } from './pokemon-card.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

storiesOf('Pokemon Card', module).add('initial', () => ({
  component: PokemonCardComponent,
  moduleMetadata: {
    imports: [MatCardModule, MatButtonModule, HttpClientModule],
    providers: [PokemonService]
  },
  props: {
    pokemonName: 'Pokemon Name',
    pokemonImageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    pokemonTypes: ['fire', 'grass']
  }
}));
