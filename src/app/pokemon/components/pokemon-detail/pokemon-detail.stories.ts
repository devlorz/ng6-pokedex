import { PokemonDetailComponent } from './pokemon-detail.component';
import { storiesOf } from '@storybook/angular';
import { CapitalizePipe } from '../../../shared/capitalize.pipe';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetail } from '../../models/pokemon-detail.model';

const pokemonDetail: PokemonDetail = {
  name: 'name',
  sprite: 'image',
  types: [],
  id: 0,
  description: 'desc'
};

storiesOf('Pokemon Detail', module).add('initial', () => ({
  component: PokemonDetailComponent,
  moduleMetadata: {
    declarations: [CapitalizePipe],
    imports: [MatDialogModule, HttpClientModule],
    providers: [{ provide: MAT_DIALOG_DATA, useValue: pokemonDetail }]
  },
  props: {}
}));
