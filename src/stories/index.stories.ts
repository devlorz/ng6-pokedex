import { ToolbarComponent } from './../app/toolbar/toolbar.component';
import { SidenavComponent } from './../app/sidenav/sidenav.component';
import { PokemonCardComponent } from './../app/pokemon-card/pokemon-card.component';
import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { SearchBarComponent } from '../app/search-bar/search-bar.component';
import {
  MatButton,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatListModule,
  MatDividerModule,
  MatToolbarModule
} from '@angular/material';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {}
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button'
    }
  }))
  .add(
    'with some emoji',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯'
      }
    }))
  )
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG')
      }
    }))
  );

storiesOf('Another Button', module).add(
  'button with link to another story',
  () => ({
    component: Button,
    props: {
      text: 'Go to Welcome Story',
      onClick: linkTo('Welcome')
    }
  })
);

storiesOf('Search Bar', module).add('initial', () => ({
  component: SearchBarComponent,
  moduleMetadata: {
    imports: [MatFormFieldModule]
  },
  props: {}
}));

storiesOf('Side Nav', module).add('initial', () => ({
  component: SidenavComponent,
  moduleMetadata: {
    imports: [MatListModule, MatButtonModule, MatDividerModule]
  },
  props: {}
}));

storiesOf('Toolbar', module).add('initial', () => ({
  component: ToolbarComponent,
  moduleMetadata: {
    imports: [MatButtonModule, MatToolbarModule]
  },
  props: {}
}));

storiesOf('Pokemon Card', module).add('initial', () => ({
  component: PokemonCardComponent,
  moduleMetadata: {
    imports: [MatCardModule, MatButtonModule]
  },
  props: {
    pokemonName: 'Pokemon Name',
    pokemonImageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  }
}));
