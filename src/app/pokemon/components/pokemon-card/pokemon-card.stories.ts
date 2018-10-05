import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';

import { CapitalizePipe } from '../../../shared/capitalize.pipe';
import { PokemonService } from '../../services/pokemon.service';
import { AppMaterialModule } from './../../../app-material.module';
import { PokemonCardComponent } from './pokemon-card.component';

storiesOf('Pokemon Card', module).add('initial', () => ({
  component: PokemonCardComponent,
  moduleMetadata: {
    imports: [AppMaterialModule],
    providers: [PokemonService],
    declarations: [CapitalizePipe]
  },
  props: {
    pokemonName: 'Pokemon Name',
    pokemonImageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    pokemonTypes: ['fire', 'grass'],
    pokemonId: 1,
    openDialog: action('openDialog')
  }
}));
