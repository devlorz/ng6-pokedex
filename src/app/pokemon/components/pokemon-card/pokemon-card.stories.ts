import { storiesOf } from '@storybook/angular';
import { PokemonCardComponent } from './pokemon-card.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { CapitalizePipe } from '../../../shared/capitalize.pipe';

storiesOf('Pokemon Card', module).add('initial', () => ({
  component: PokemonCardComponent,
  moduleMetadata: {
    imports: [MatCardModule, MatButtonModule, HttpClientModule],
    providers: [PokemonService],
    declarations: [CapitalizePipe]
  },
  props: {
    pokemonName: 'Pokemon Name',
    pokemonImageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    pokemonTypes: ['fire', 'grass']
  }
}));
