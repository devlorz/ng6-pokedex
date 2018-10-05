import { MAT_DIALOG_DATA } from '@angular/material';
import { storiesOf } from '@storybook/angular';

import { CapitalizePipe } from '../../../shared/capitalize.pipe';
import { PokemonDetail } from '../../models/pokemon-detail.model';
import { AppMaterialModule } from './../../../app-material.module';
import { PokemonDetailComponent } from './pokemon-detail.component';

const pokemonDetail: PokemonDetail = {
  name: 'pikachu',
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  types: ['electric'],
  id: 25,
  description:
    ' It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state. ',
  backgroundColor: { backgroundColor: '#F08030' },
  titleColor: 'rgb(171, 79, 13)',
  typesColor: { electric: '#F08030' }
};

storiesOf('Pokemon Detail', module).add('initial', () => ({
  component: PokemonDetailComponent,
  moduleMetadata: {
    declarations: [CapitalizePipe],
    imports: [AppMaterialModule],
    providers: [
      {
        provide: MAT_DIALOG_DATA,
        useValue: pokemonDetail
      }
    ]
  },
  props: { pokemon: pokemonDetail }
}));
