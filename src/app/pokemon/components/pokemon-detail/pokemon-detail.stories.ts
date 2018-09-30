import { PokemonDetailComponent } from './pokemon-detail.component';
import { storiesOf } from '@storybook/angular';
import { CapitalizePipe } from '../../../shared/capitalize.pipe';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatIconModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetail } from '../../models/pokemon-detail.model';

const pokemonDetail: PokemonDetail = {
  name: 'pikachu',
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  types: ['electric'],
  id: 25,
  description:
    ' It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state. '
};

storiesOf('Pokemon Detail', module).add('initial', () => ({
  component: PokemonDetailComponent,
  moduleMetadata: {
    declarations: [CapitalizePipe],
    imports: [MatDialogModule, HttpClientModule, MatIconModule],
    providers: [
      {
        provide: MAT_DIALOG_DATA,
        useValue: pokemonDetail
      }
    ]
  },
  props: {}
}));
